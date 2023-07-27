import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenService } from '../../../application/services/token.service';
import { EMPLOYEE_ROLE_ID } from '../../../../users/infrastructure/constants';

@Injectable()
export class CreateEmployeeGuard implements CanActivate {
    constructor(private readonly tokenService: TokenService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { body } = request;

        const token = request.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return false;
        }

        try {
            const payload = await this.tokenService.verifyToken(token);
            if (!payload?.role) {
                return false;
            }
            if (body.roleId !== EMPLOYEE_ROLE_ID || payload.role !== 'owner') {
                return false
            }
            request['user'] = payload;
            return true;
        } catch (error) {
            return false;
        }
    }
}