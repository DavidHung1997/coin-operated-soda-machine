import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { TypeMoneyAddDto } from './dto/type-money-add.dto';
import { TypeMoneyService } from './type-money.service';

@Controller('type-money')
export class TypeMoneyController {
    constructor(
        private readonly typeMoneyService: TypeMoneyService,
    ) { }

    @Get("add")
    async add(@Res({ passthrough: true }) res: Response) {
        const data = this.typeMoneyService.add();
        res.status(HttpStatus.OK)
        return data
    }


    /**
     * Lấy tất cả mệnh giá của tiền
     * @param res 
     * @returns 
     */
    @Get("all")
    async getAll(@Res({ passthrough: true }) res: Response) {
        const data = this.typeMoneyService.getAll();
        res.status(HttpStatus.OK)
        return data
    }

}
