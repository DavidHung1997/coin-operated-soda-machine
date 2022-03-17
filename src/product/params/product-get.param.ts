import { IsMongoId } from "class-validator";

export class ProductGetParam {
    @IsMongoId()
    product_id: string;
}