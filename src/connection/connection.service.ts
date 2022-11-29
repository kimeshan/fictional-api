import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ConnectionService {
    constructor(private prisma:PrismaService){}
    welcome() {
        return 'Welcome to the Connection module of Fictional API!'
    }
    newConnection() {
        return 'New connection initiated'
    }
    callApi() {
        return 'Call api has been initiated'
    }
}