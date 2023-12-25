/* eslint-disable prettier/prettier */

/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewUserModel {
    name?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export class Users {
    id?: Nullable<number>;
    name?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    phoneNumber?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(): Users[] | Promise<Users[]>;
}

export abstract class IMutation {
    abstract insert(input?: Nullable<NewUserModel>): Users | Promise<Users>;
}

type Nullable<T> = T | null;
