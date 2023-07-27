import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenService } from '../../../application/services/token.service';
import { CLIENT_ROLE_ID } from '../../../../users/infrastructure/constants';

@Injectable()
export class CreateClientGuard implements CanActivate {
    constructor(private readonly tokenService: TokenService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { body } = request;
        
        if (body.roleId !== CLIENT_ROLE_ID) {
            return false
        }
        return true;
    }
}