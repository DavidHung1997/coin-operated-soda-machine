import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & Document;

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
export class Product {
    @Prop({ type: mongoose.Schema.Types.String, required: true })
    name: string;

    @Prop({ type: mongoose.Schema.Types.Number })
    price: number;

    @Prop({ type: mongoose.Schema.Types.Number })
    quantity: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
