import { AuthDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
export declare class AuthService {
    private readonly usersServices;
    private readonly jwtService;
    constructor(usersServices: UserService, jwtService: JwtService);
    signIn(payload: AuthDto): Promise<{
        user: import("../entities").User;
        token: string;
    }>;
}
