import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenService } from '../../../application/services/token.service';

@Injectable()
export class CreateOwnerGuard implements CanActivate {
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
            if (body.roleId || payload.role !== 'admin') {
                return false
            }
            return true;
        } catch (error) {
            return false;
        }
    }
}