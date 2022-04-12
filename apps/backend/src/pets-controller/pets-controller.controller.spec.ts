import { Test, TestingModule } from '@nestjs/testing';
import { PetsControllerController } from './pets-controller.controller';

describe('PetsControllerController', () => {
  let controller: PetsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsControllerController],
    }).compile();

    controller = module.get<PetsControllerController>(PetsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
