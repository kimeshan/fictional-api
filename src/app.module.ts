//Import Modules
import { Module } from '@nestjs/common';
import { ConectionModule } from './connection/connection.module';
import { PrismaModule } from './prisma/prisma.module';

// Import Controllers
import { ConnectionController } from './connection/connection.controller';

// Import Services
import { ConnectionService } from './connection/connection.service';
import { ConnectionData } from './connection/connection.data';

@Module({
  imports: [ConectionModule, PrismaModule],
  controllers: [ConnectionController],
  providers: [ConnectionService, ConnectionData],
})
export class AppModule {}
