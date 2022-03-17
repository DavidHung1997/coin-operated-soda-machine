import { IsNotEmpty, IsPhoneNumber } from "class-validator";


export class TypeMoneyAddDto {
    @IsNotEmpty()
    name: string;

    description: string;
}