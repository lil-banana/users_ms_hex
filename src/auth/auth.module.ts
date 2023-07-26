import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './infrastructure/controllers/auth.controller';
import { LOGIN_USE_CASE } from './domain/interfaces/login.interface';
import { LoginUseCase } from './application/usecases/login.usecase';
import { UsersModule } from 'src/users/users.module';
import { TokenService } from './application/services/token.service';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: 'secret',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthController],
    providers: [
        TokenService,
        {
            provide: LOGIN_USE_CASE,
            useClass: LoginUseCase,
        }
    ]
})
export class AuthModule { }