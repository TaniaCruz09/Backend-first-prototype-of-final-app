import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class ValidarApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKeyHeader = request.headers['api-key'];
    const apiKeyEnv = this.config.get<string>('API_KEY');
    return apiKeyEnv === apiKeyHeader;
  }
}
