import { Injectable, Provider } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ConnectionData {
    constructor(private prisma:PrismaService){}

    // Find provider based on name (string)
    async getProvider(providerString) {
        return await this.prisma.provider.findUnique({
            where: {
              name: providerString.toLowerCase(),
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