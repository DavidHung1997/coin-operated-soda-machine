import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type OrderDocument = Order & Document;

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
export class Order {
    @Prop({ type: mongoose.Schema.Types.Date, default: Date.now })
    created_date: Date;

    @Prop({ type: mongoose.Schema.Types.String, required: true })
    orderStatus: string;

    @Prop({ type: mongoose.Schema.Types.Number })
    total: number;

    @Prop({ type: mongoose.Schema.Types.Number })
    deposit: number;

}

export const OrderSchema = SchemaFactory.createForClass(Order);
