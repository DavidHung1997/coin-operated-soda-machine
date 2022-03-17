import { Module } from '@nestjs/common';
import { OrderDetail, OrderDetailSchema } from './schemas/order-detail.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailController } from './order-detail.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: OrderDetail.name, schema: OrderDetailSchema }])],
    providers: [OrderDetailService],
    controllers: [OrderDetailController],
    exports: [OrderDetailService]
})
export class OrderDetailModule { }
