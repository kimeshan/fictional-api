import { Module } from "@nestjs/common";
import { ConnectionController } from "./connection.controller";
import { ConnectionService } from "./connection.service";
import { ConnectionData } from "./connection.data";

@Module({
    controllers: [ConnectionController],
    providers: [ConnectionService, ConnectionData]
})
export class ConectionModule {}