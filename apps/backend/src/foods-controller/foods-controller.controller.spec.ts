import { Test, TestingModule } from '@nestjs/testing';
import { FoodsControllerController } from './foods-controller.controller';

describe('FoodsControllerController', () => {
  let controller: FoodsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodsControllerController],
    }).compile();

    controller = module.get<FoodsControllerController>(FoodsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
