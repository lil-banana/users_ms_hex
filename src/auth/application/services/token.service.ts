import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService) { }

    async signToken(userId: string, role: string): Promise<string> {
        const payload = { userId, role };
        return this.jwtService.signAsync(payload);
    }

    async verifyToken(token: string): Promise<any> {
        return this.jwtService.verifyAsync(token);
    }
}