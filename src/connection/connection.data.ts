import { Injectable, Provider } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ConnectionData {
    constructor(private prisma:PrismaService){}

    // Find provider based on name (string)
    async getProvider(providerName:string) {
        return await this.prisma.provider.findUnique({
            where: {
              name: providerName.toLowerCase(),
            },
        })
    }

    // Find connection based on reference
    async getConnection(reference:string) {
        return await this.prisma.connection.findUnique({
            where: {
              reference
            },
            include: {
                provider: true, // Return all fields
            },
        })
    }

    // Add connection for a provider
    async addConnection (provider, basicAuthUsername, basicAuthPassword, accessToken, reference) {
        try {
            const conn = await this.prisma.connection.create({
                data: {
                  provider: { connect: {id: provider}},
                  basicAuthUsername,
                  basicAuthPassword,
                  accessToken,
                  reference
                },
            })
            return conn
        } catch (e) {
            return null
        }

    }


}