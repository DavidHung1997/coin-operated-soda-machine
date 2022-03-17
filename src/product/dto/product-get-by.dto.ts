import { IsNotEmpty, IsPhoneNumber } from "class-validator";


export class ProductGetByDto {
    price: number;
    idProduct: string;
    quantity: number
}