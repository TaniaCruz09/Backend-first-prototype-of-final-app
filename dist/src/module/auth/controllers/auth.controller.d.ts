import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(payload: AuthDto): Promise<{
        user: import("../entities").User;
        token: string;
    }>;
    test(): string;
}
