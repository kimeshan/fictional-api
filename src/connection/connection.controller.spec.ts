import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionController } from './connection.controller';
import { ConnectionService } from "./connection.service";

describe('ConnectionController', () => {
  let connController: ConnectionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConnectionController],
      providers: [ConnectionService],
    }).compile();

    connController = app.get<ConnectionController>(ConnectionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(connController.welcome()).toBe(
        'Welcome to the Connection module of Fictional API!'
        );
    });
  });
});
