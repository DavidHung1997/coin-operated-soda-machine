import { Injectable } from '@nestjs/common';
import { Order, OrderDocument } from './schemas/order.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    ) { }

    async insert(order: any) {
        return await this.orderModel.create(order)
    }

    async update(filter: any, order: any) {
        return await this.orderModel.updateOne(filter, order)
    }

    async getOrderById(id: string) {
        return await this.orderModel.findById(id)
    }
}
