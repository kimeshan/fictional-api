//Import Modules
import { Module } from '@nestjs/common';
import { ConectionModule } from './connection/connection.module';
import { PrismaModule } from './prisma/prisma.module';

// Import Controllers
import { ConnectionController } from './connection/connection.controller';

// Import Services
import { ConnectionService } from './connection/connection.service';

@Module({
  imports: [ConectionModule, PrismaModule],
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class AppModule {}
