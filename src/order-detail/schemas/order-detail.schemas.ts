import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Order } from 'src/order/schemas/order.schemas';
import { Product } from 'src/product/schemas/product.schemas';

export type OrderDetailDocument = OrderDetail & Document;

@Schema({
    toJSON: {
        virtuals: true,
        transform: (doc, ret, options) => {
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id;
        },
    },
})
export class OrderDetail {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
    idOrder: Order;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    idProduct: Product;

    @Prop({ type: mongoose.Schema.Types.Number })
    quantity: number;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
