import { Test, TestingModule } from '@nestjs/testing';
import { OwnersControllerController } from './owners-controller.controller';

describe('OwnersControllerController', () => {
  let controller: OwnersControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnersControllerController],
    }).compile();

    controller = module.get<OwnersControllerController>(OwnersControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
