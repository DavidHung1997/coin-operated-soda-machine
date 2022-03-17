import { Injectable } from '@nestjs/common';
import { OrderDetail, OrderDetailDocument } from './schemas/order-detail.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderDetailService {
    constructor(
        @InjectModel(OrderDetail.name) private readonly typeMoneyModel: Model<OrderDetailDocument>,
    ) { }
}
