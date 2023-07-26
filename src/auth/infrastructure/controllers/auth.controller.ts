import { Controller, Post, Body, Inject, UseFilters, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoginDtoMapper } from './mappers/login.mapper';
import { TokenDtoMapper } from './mappers/token.mapper';
import { ILoginUseCase, LOGIN_USE_CASE } from '../../domain/interfaces/login.interface';
import { LoginDto } from './dtos/login.dto';
import { TokenDto } from './dtos/token.dto';
import { User } from '../../../users/domain/models/user.model';

@ApiTags('auth')
@Controller('auth')
@UseFilters(new HttpExceptionFilter())
export class AuthController {
    private readonly loginDtoMapper: LoginDtoMapper = new LoginDtoMapper();
    private readonly tokenDtoMapper: TokenDtoMapper = new TokenDtoMapper();

    constructor(
        @Inject(LOGIN_USE_CASE) private readonly loginUseCase: ILoginUseCase
    ) { }

    @Post('login')
    @ApiResponse({ status: 200, description: 'Login an user and return a token', type: TokenDto })
    async login(@Body(ValidationPipe) loginDto: LoginDto): Promise<TokenDto> {
        const userPartial: Partial<User> = this.loginDtoMapper.toUserPartial(loginDto);
        return this.tokenDtoMapper.toTokenDto(await this.loginUseCase.login(userPartial));
    }
}