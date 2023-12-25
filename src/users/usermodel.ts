/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { NewUserModel } from "src/graphql";

export class UserModel extends NewUserModel {
    id:number;
    
    @IsNotEmpty()
    name:string;
    
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    phoneNumber:string;
}