import { Controller, Get, Post, Body, Param, Inject, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UserRequest } from './dtos/userRequest.dto';
import { UserIdDto } from './dtos/userId.dto';
import { UserResponse } from './dtos/userResponse.dto';
import { UserRequestMapper } from './mappers/userRequest.mapper';
import { UserIdDtoMapper } from './mappers/userId.mapper';
import { UserResponseMapper } from './mappers/userResponse.mapper';
import { CREATE_USER_USE_CASE, ICreateUserUseCase } from '../../domain/interfaces/createUser.interface';
import { GET_USER_USE_CASE, IGetUserUseCase } from '../../domain/interfaces/getUser.interface';
import { User } from '../../domain/models/user.model';
import { CreateUserGuard } from '../../../auth/infrastructure/controllers/guards/createUser.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
    private readonly userRequestMapper: UserRequestMapper = new UserRequestMapper();
    private readonly userIdDtoMapper: UserIdDtoMapper = new UserIdDtoMapper();
    private readonly userResponseMapper: UserResponseMapper = new UserResponseMapper();

    constructor(
        @Inject(CREATE_USER_USE_CASE) private readonly createUserUseCase: ICreateUserUseCase,
        @Inject(GET_USER_USE_CASE) private readonly getUserUseCase: IGetUserUseCase
    ) { }

    @Post()
    @UseGuards(CreateUserGuard)
    @ApiResponse({ status: 201, description: 'Creates a new user', type: UserIdDto })
    async saveUser(@Body() userRequest: UserRequest): Promise<UserIdDto> {
        const user: User = this.userRequestMapper.toUser(userRequest);
        return this.userIdDtoMapper.toUserIdDto(await this.createUserUseCase.saveUser(user));
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Returns the user with the given id', type: UserResponse })
    @ApiParam({ name: 'id', description: 'The ID of the user, is a uuid', example: '91764071-9108-48f6-968c-9022e34a6ac8' })
    async getUser(@Param('id') userId: string): Promise<UserResponse> {
        return this.userResponseMapper.toUserResponse(await this.getUserUseCase.getUser(userId));
    }
}