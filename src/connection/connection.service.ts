import { Injectable } from "@nestjs/common";
import { NewConnectionDto, CallApiDto } from "./dto";
import { ConnectionData } from "./connection.data";
import * as argon from "argon2";
import axios from 'axios';

@Injectable()
export class ConnectionService {
    constructor(private data:ConnectionData){}
    welcome() {
        return 'Welcome to the Connection module of Fictional API!'
    }
    async newConnection(dto: NewConnectionDto) {
        // Look up provider
        const provider = await this.data.getProvider(dto.provider)
        if (provider){
            const reference = await argon.hash(Date.now().toString());
            const connection = await this.data.addConnection(
                provider.id, dto.basicAuthUsername, dto.basicAuthPassword, dto.accessToken, reference)
            return connection ? reference : 'Error creating connection'
        } else return 'This provider is not supported yet'
    }
    async callApi(dto: CallApiDto) {
        // Check if reference exists in a connection and is valid
        const {reference, path, connectionMethod, ...postData} = dto
        const connection = await this.data.getConnection(dto.reference)
        if (connection) {
            const provider = connection.provider
            const url = this.urlConstructor(provider.url, path)
            const result = await this.apiAdaptor(
                provider.authType, connection, url, connectionMethod, postData
                )
            return result

        } else return 'Invalid reference received, you cannot call this API'
    }

    urlConstructor (root:string, path:string) {
        // assume path has no front slash, next step: strip out front slash
        return root+path
    }

    async apiAdaptor (authType, authData, url, method, data) {
        // B ased on the authType, create the request object for Axios
        if (authType == 'HTTPBasicAuth') {
            const auth = {
                username: authData.basicAuthUsername,
                password: authData.basicAuthPassword
            }
            const callConfig = {
                auth,
                method,
                url,
                data,
            };
            
            const result = await axios(callConfig)
            if (result.status === 200) return result.data
            else return 'Error calling API endpoint'
            
        } else if (authType == 'AccessToken') {
            // call axios with access token
        } else return 'Auth type not supported yet'
    }
}