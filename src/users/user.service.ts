/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from "@nestjs/common";
import { UserModel } from "./usermodel";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class UserService {
    constructor(private prismaService: PrismaService) {

    }

    async GetAll() {
        return await this.prismaService.users.findMany();
    }

    async GetById(id: number) {
        const user = await this.prismaService.users.findUnique({ where: { id: id } });

        if (!user) {
            throw new ForbiddenException('User not found');
        }

        delete user.password

        return user;
    }

    async Insert(userModel: UserModel) {
        const user = await this.prismaService.users.create({
            data: {
                name: userModel.name,
                username: userModel.username,
                password: userModel.password,
                phoneNumber: userModel.password
            }
        })
        delete user.password
        return user;
    }

    async Update(userModel: UserModel) {
        const user = await this.prismaService.users.update({
            data: {
                name: userModel.name,
                username: userModel.username,
                password: userModel.password,
                phoneNumber: userModel.password
            },
            where: {
                id: userModel.id
            }
        })
        delete user.password
        return user;
    }

    async Delete(id: number) {
        const user = await this.prismaService.users.delete({
            where: {
                id: id
            }
        })
        delete user.password
        return user;
    }
}