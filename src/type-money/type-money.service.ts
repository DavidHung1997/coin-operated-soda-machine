import { ConflictException, Injectable } from '@nestjs/common';
import { TypeMoney, TypeMoneyDocument } from './schemas/type-money.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TypeMoneyAddDto } from './dto/type-money-add.dto';
import { TypeMoneyEnum } from 'src/utils/Enums';

@Injectable()
export class TypeMoneyService {

    constructor(
        @InjectModel(TypeMoney.name) private readonly typeMoneyModel: Model<TypeMoneyDocument>,
    ) { }

    async findOne(filter: any) {
        return await this.typeMoneyModel.findOne(filter)
    }

    async getAll() {
        const list = await this.typeMoneyModel.find()
        return {
            money: list
        }
    }

    async add() {
        // const types = await this.typeMoneyModel.find()
        // if (types.length > 0) {
        //     throw new ConflictException('Data is created')
        // }
        await this.typeMoneyModel.deleteMany()
        const data = [
            {
                name: TypeMoneyEnum.money_10,
                price: 10000
            },
            {
                name: TypeMoneyEnum.money_100,
                price: 100000
            },
            {
                name: TypeMoneyEnum.money_20,
                price: 20000
            },
            {
                name: TypeMoneyEnum.money_200,
                price: 200000
            },
            {
                name: TypeMoneyEnum.money_50,
                price: 50000
            }
        ]

        const list = await this.typeMoneyModel.insertMany(data)
        return list
    }
}
