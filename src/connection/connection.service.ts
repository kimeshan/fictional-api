import { Injectable } from "@nestjs/common";
import { NewConnectionDto } from "./dto";
import { ConnectionData } from "./connection.data";
import * as argon from "argon2";

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
    async callApi() {
        return 'Call api has been initiated'
    }
}