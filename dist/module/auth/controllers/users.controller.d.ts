import { UsersDto, UserPartialTypeDto } from '../dtos/users-dto';
import { User } from '../entities';
import { UserService } from '../services';
export declare class UsersController {
    private readonly usersServices;
    constructor(usersServices: UserService);
    getUsers(): Promise<{
        data: User[];
        message: string;
    }>;
    createUser(payload: UsersDto): Promise<{
        user: User;
        token: string;
    }>;
    getUserById(id: number): Promise<User>;
    updatedUser(id: number, payload: UserPartialTypeDto): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
