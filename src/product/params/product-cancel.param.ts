import { IsMongoId } from "class-validator";

export class ProductCancelParam {
    @IsMongoId()
    idOrder: string;
}