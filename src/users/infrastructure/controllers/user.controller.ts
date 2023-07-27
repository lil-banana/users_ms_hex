import { Controller, Get, Post, Body, Param, Inject, UseGuards, Request, UseFilters } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { OwnerRequest } from './dtos/ownerRequest.dto';
import { EmployeeRequest } from './dtos/employeeRequest.dto';
import { UserIdDto } from './dtos/userId.dto';
import { UserResponse } from './dtos/userResponse.dto';
import { OwnerRequestMapper } from './mappers/ownerRequest.mapper';
import { EmployeeRequestMapper } from './mappers/employeeRequest.mapper';
import { UserIdDtoMapper } from './mappers/userId.mapper';
import { UserResponseMapper } from './mappers/userResponse.mapper';
import { CREATE_USER_USE_CASE, ICreateUserUseCase } from '../../domain/interfaces/createUser.interface';
import { GET_USER_USE_CASE, IGetUserUseCase } from '../../domain/interfaces/getUser.interface';
import { User } from '../../domain/models/user.model';
import { CreateOwnerGuard } from '../../../auth/infrastructure/controllers/guards/createOwner.guard';
import { CreateEmployeeGuard } from '../../../auth/infrastructure/controllers/guards/createEmployee.guard';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ClientRequestMapper } from './mappers/clientRequest.mapper';
import { ClientRequest } from './dtos/clientRequest.dto';
import { CreateClientGuard } from '../../../auth/infrastructure/controllers/guards/createClient.guard';

@ApiTags('users')
@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UserController {
    private readonly ownerRequestMapper: OwnerRequestMapper = new OwnerRequestMapper();
    private readonly employeeRequestMapper: EmployeeRequestMapper = new EmployeeRequestMapper();
    private readonly clientRequestMapper: ClientRequestMapper = new ClientRequestMapper();
    private readonly userIdDtoMapper: UserIdDtoMapper = new UserIdDtoMapper();
    private readonly userResponseMapper: UserResponseMapper = new UserResponseMapper();

    constructor(
        @Inject(CREATE_USER_USE_CASE) private readonly createUserUseCase: ICreateUserUseCase,
        @Inject(GET_USER_USE_CASE) private readonly getUserUseCase: IGetUserUseCase
    ) { }

    @Post('owner')
    @UseGuards(CreateOwnerGuard)
    @ApiResponse({ status: 201, description: 'Creates a new owner user', type: UserIdDto })
    async saveOwner(@Body() ownerRequest: OwnerRequest): Promise<UserIdDto> {
        const user: User = this.ownerRequestMapper.toUser(ownerRequest);
        return this.userIdDtoMapper.toUserIdDto(await this.createUserUseCase.saveUser(user));
    }

    @Post('employee')
    @UseGuards(CreateEmployeeGuard)
    @ApiResponse({ status: 201, description: 'Creates a new employee user', type: UserIdDto })
    async saveEmployee(@Body() employeeRequest: EmployeeRequest, @Request() request: any): Promise<UserIdDto> {
        const user: User = this.employeeRequestMapper.toUser(employeeRequest, request.user.userId);
        return this.userIdDtoMapper.toUserIdDto(await this.createUserUseCase.saveUser(user));
    }

    @Post('client')
    @UseGuards(CreateClientGuard)
    @ApiResponse({ status: 201, description: 'Creates a new client user', type: UserIdDto })
    async saveClient(@Body() cientRequest: ClientRequest): Promise<UserIdDto> {
        const user: User = this.clientRequestMapper.toUser(cientRequest);
        return this.userIdDtoMapper.toUserIdDto(await this.createUserUseCase.saveUser(user));
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Returns the user with the given id', type: UserResponse })
    @ApiParam({ name: 'id', description: 'The ID of the user, is a uuid', example: '91764071-9108-48f6-968c-9022e34a6ac8' })
    async getUser(@Param('id') userId: string): Promise<UserResponse> {
        return this.userResponseMapper.toUserResponse(await this.getUserUseCase.getUser(userId));
    }
}