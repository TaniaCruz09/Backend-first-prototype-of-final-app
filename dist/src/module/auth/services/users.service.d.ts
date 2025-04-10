import { User } from "../entities";
import { Repository } from "typeorm";
import { UserPartialTypeDto, UsersDto } from "../dtos/users-dto";
import { JwtService } from "@nestjs/jwt";
export declare class UserService {
    private readonly userRepository;
    private readonly jwtService;
    users: any[];
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    countItems(): number;
    findByEmail(email: string): Promise<User>;
    created(payload: UsersDto): Promise<{
        user: User;
        token: string;
    }>;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    updated(id: number, payload: UserPartialTypeDto): Promise<User>;
    deleted(id: number): Promise<User>;
}
