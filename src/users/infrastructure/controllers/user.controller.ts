import { Controller, Get, Post, Put, Delete, Body, Param, Inject, forwardRef } from '@nestjs/common';
import { IUserUseCase } from '../../application/ports/user.usecase';
import { UserRequest } from '../../application/dto/userRequest.dto';
import { UserResponse } from '../../application/dto/userResponse.dto';
import { UserUseCase } from 'src/users/application/usecases/user.usecase';

@Controller('users')
export class UserController {

    constructor(@Inject(forwardRef(() => UserUseCase)) private readonly userUseCase: IUserUseCase) { }

    @Post()
    async saveUser(@Body() userRequest: UserRequest): Promise<UserResponse> {
        return this.userUseCase.saveUser(userRequest);
    }

    @Get()
    async getUsers(): Promise<UserResponse[]> {
        return this.userUseCase.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id') userId: string): Promise<UserResponse> {
        return this.userUseCase.getUser(userId);
    }
}