import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { UserRequest } from './dto/userRequest.dto';
import { UserResponse } from './dto/userResponse.dto';
import { UserRequestMapper } from './mappers/userRequest.mapper';
import { UserResponseMapper } from './mappers/userResponse.mapper';
import { CREATE_USER_USE_CASE, ICreateUserUseCase } from '../../domain/interfaces/createUser.interface';
import { GET_USER_USE_CASE, IGetUserUseCase } from '../../domain/interfaces/getUser.interface';
import { User } from '../../domain/models/user.model';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
    private readonly userRequestMapper: UserRequestMapper = new UserRequestMapper();
    private readonly userResponseMapper: UserResponseMapper = new UserResponseMapper();
    
    constructor(
        @Inject(CREATE_USER_USE_CASE) private readonly createUserUseCase: ICreateUserUseCase,
        @Inject(GET_USER_USE_CASE) private readonly getUserUseCase: IGetUserUseCase
    ) { }

    @Post()
    @ApiResponse({ status: 201, description: 'Creates a new user', type: UserResponse })
    async saveUser(@Body() userRequest: UserRequest): Promise<UserResponse> {
        try {
            const user: User = this.userRequestMapper.toUser(userRequest);
            return this.userResponseMapper.toUserResponse(await this.createUserUseCase.saveUser(user));
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Returns the user with the given id', type: UserResponse })
    @ApiParam({ name: 'id', description: 'The ID of the user, is a uuid', example: '91764071-9108-48f6-968c-9022e34a6ac8' })
    async getUser(@Param('id') userId: string): Promise<UserResponse> {
        return this.userResponseMapper.toUserResponse(await this.getUserUseCase.getUser(userId));
    }
}