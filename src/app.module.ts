import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
import { OrderDetailController } from './order-detail/order-detail.controller';
import { OrderDetailService } from './order-detail/order-detail.service';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { TypeMoneyModule } from './type-money/type-money.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/dbsodamachine`),
    ProductModule,
    OrderDetailModule,
    TypeMoneyModule,
  ],
  controllers: [AppController, ProductController,],
  providers: [AppService,],
})
export class AppModule { }
