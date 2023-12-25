/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { UserModel } from "./usermodel";
import { Users } from "src/graphql";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {

    }

    @Query('users')
    async GetAll() {
        return await this.userService.GetAll();
    }

    @Mutation('insert')
    async Insert(@Args('input') args: UserModel): Promise<Users> {
        return await this.userService.Insert(args);
    }
}