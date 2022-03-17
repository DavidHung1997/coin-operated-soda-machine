import { Module } from '@nestjs/common';
import { TypeMoneyController } from './type-money.controller';
import { TypeMoneyService } from './type-money.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeMoney, TypeMoneySchema } from './schemas/type-money.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: TypeMoney.name, schema: TypeMoneySchema }])],
  controllers: [TypeMoneyController],
  providers: [TypeMoneyService],
  exports: [TypeMoneyService]
})
export class TypeMoneyModule { }
