import { Test, TestingModule } from '@nestjs/testing';
import { CareControllerController } from './care-controller.controller';

describe('CareControllerController', () => {
  let controller: CareControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareControllerController],
    }).compile();

    controller = module.get<CareControllerController>(CareControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
