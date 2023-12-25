/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Users } from "src/graphql";
import { UserModel } from "./usermodel";

@Injectable({})
export class UserService {
    private readonly users: Users[] = [];

    GetAll(): Users[] {
        return this.users;
    }

    Insert(userModel: UserModel){
        const user =new Users();
        user.id = this.users.length+1;
        user.name = userModel.name;
        user.username = userModel.username;
        user.password = userModel.password;
        user.phoneNumber = userModel.phoneNumber;
        this.users.push(user);
        return user;
    }
}