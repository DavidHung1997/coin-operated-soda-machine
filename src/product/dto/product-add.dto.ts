import { IsNotEmpty, IsPhoneNumber } from "class-validator";


export class ProductAddDto {
    name: string;
    price: number;
    quantity: number;
}