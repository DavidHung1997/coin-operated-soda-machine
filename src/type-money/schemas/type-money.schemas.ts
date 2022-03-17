import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TypeMoneyDocument = TypeMoney & Document;

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
export class TypeMoney {
    @Prop({ type: mongoose.Schema.Types.String, required: true })
    name: string;

    @Prop({ type: mongoose.Schema.Types.Number })
    price: number;
}

export const TypeMoneySchema = SchemaFactory.createForClass(TypeMoney);
