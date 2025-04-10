export declare class UsersDto {
    readonly id?: number;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly token: string;
    readonly isActive: boolean;
}
declare const UserPartialTypeDto_base: import("@nestjs/common").Type<Partial<UsersDto>>;
export declare class UserPartialTypeDto extends UserPartialTypeDto_base {
}
export {};
