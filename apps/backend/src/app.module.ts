import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsControllerController } from './pets-controller/pets-controller.controller';
import { CareControllerController } from './care-controller/care-controller.controller';
import { FoodsControllerController } from './foods-controller/foods-controller.controller';
import { FoodsControllerController } from './foods-controller/foods-controller.controller';
import { OwnersControllerController } from './owners-controller/owners-controller.controller';
import { PetsControllerController } from './pets-controller/pets-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, PetsControllerController, OwnersControllerController, FoodsControllerController, CareControllerController],
  providers: [AppService],
})
export class AppModule {}
