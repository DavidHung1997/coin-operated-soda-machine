import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schemas';
import { ProductAddDto } from './dto/product-add.dto';
import { ProductGetParam } from './params/product-get.param';
import { ProductGetByDto } from './dto/product-get-by.dto';
import { TypeMoneyService } from 'src/type-money/type-money.service';
import { OrderService } from 'src/order/order.service';
import { OrderStatusEnum } from 'src/utils/Enums';
import { ProductCancelParam } from './params/product-cancel.param';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
        private typeMoneyService: TypeMoneyService,
        private orderService: OrderService
    ) { }

    async getProductByUser(productDto: ProductGetByDto) {
        const isExists = await this.typeMoneyService.findOne({ price: productDto.price });
        if (!isExists) {
            throw new NotFoundException("Not accept")
        }
        const product = await this.productModel.findOne({ _id: productDto.idProduct })
        if (productDto.price < (productDto.quantity * product.price)) { // Tiền đưa vào phải lớn hơn hoặc bằng tổng đơn hàng
            throw new NotFoundException("Tiền đưa vào phải lớn hơn hoặc bằng tổng đơn hàng")
        }

        const newQuantity = product.quantity - productDto.quantity
        await this.productModel.updateOne({ quantity: newQuantity })

        const newProduct = await this.productModel.findOne({ _id: productDto.idProduct })

        //create order and order detail
        const order = {
            created_date: new Date(),
            orderStatus: OrderStatusEnum.Open,
            total: (productDto.quantity * product.price),
            deposit: productDto.price
        }
        const newOrder = await this.orderService.insert(order)

        return {
            product: newProduct,
            remaningBalance: productDto.price - (productDto.quantity * product.price)
        }
    }

    async getDetail(param: ProductGetParam) {
        const product = await this.productModel.findOne({ _id: param.product_id })
        return { product }
    }

    async add(productAddDto: ProductAddDto) {
        const product = {
            name: productAddDto.name,
            price: productAddDto.price,
            quantity: productAddDto.quantity
        }
        return await this.productModel.create(product)
    }

    async getAll() {
        const list = await this.productModel.find()
        return {
            products: list
        }
    }

    async cancelRequestByUser(param: ProductCancelParam) {
        const order = await this.orderService.getOrderById(param.idOrder)
        const newOrder = {
            orderStatus: OrderStatusEnum.Cancel,
        }
        await this.orderService.update({ _id: param.idOrder }, newOrder)
        return {
            deposit: order.deposit,
            status: OrderStatusEnum.Cancel
        }
    }

}
