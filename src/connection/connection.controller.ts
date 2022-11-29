import { Body, Controller, Post } from "@nestjs/common";
import { ConnectionService } from "./connection.service";
import { NewConnectionDto, CallApiDto} from "./dto";

@Controller('connection')
export class ConnectionController {
    constructor(private connService: ConnectionService) {}
    @Post('new')
    newConnection(@Body() dto: NewConnectionDto) {
        console.log({dto})
        return this.connService.newConnection()
    }
    @Post('callapi')
    callApi(@Body() dto: CallApiDto) {
        return this.connService.callApi()
    }
}