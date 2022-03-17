import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Request, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductAddDto } from './dto/product-add.dto';
import { ProductGetByDto } from './dto/product-get-by.dto';
import { ProductCancelParam } from './params/product-cancel.param';
import { ProductGetParam } from './params/product-get.param';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    /**
     * Thêm sản phẩm vào kho
     * @param res 
     * @param productAddDto 
     * @returns 
     */
    @Post("add")
    async addProduct(@Res({ passthrough: true }) res: Response, @Body() productAddDto: ProductAddDto,
    ) {
        const result = await this.productService.add(productAddDto)
        res.status(HttpStatus.OK)
        return result
    }


    /**
     * Lấy tất cả sản phẩm
     * @param res 
     * @returns 
     */
    @Get("all")
    async getAll(@Res({ passthrough: true }) res: Response
    ) {
        const result = await this.productService.getAll()
        res.status(HttpStatus.OK)
        return result
    }


    /**
     * Lấy chi tiết sản phẩm
     * @param res 
     * @param param 
     * @returns 
     */
    @Get("detail/:product_id")
    async getDetail(@Res({ passthrough: true }) res: Response, @Param() param: ProductGetParam
    ) {
        const result = await this.productService.getDetail(param)
        res.status(HttpStatus.OK)
        return result
    }


    /**
     * Người dùng lấy sản phẩm từ machine
     * @param res 
     * @param param 
     * @returns 
     */
    @Post("get-by-user")
    async getProductByUser(@Res({ passthrough: true }) res: Response, @Body() productGetByDto: ProductGetByDto
    ) {
        const result = await this.productService.getProductByUser(productGetByDto)
        res.status(HttpStatus.OK)
        return result
    }


    /**
     * Hủy yêu cầu  và hoàn tiền
     * @param res 
     * @returns 
     */
    @Delete("cancel-by-user/:idOrder")
    async cancelRequestByUser(@Res({ passthrough: true }) res: Response, @Param() param: ProductCancelParam
    ) {
        const result = await this.productService.cancelRequestByUser(param)
        res.status(HttpStatus.OK)
        return result
    }


}

