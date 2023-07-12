import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { IUserUseCase } from "../ports/user.usecase";
import { UserRequest } from "../dto/userRequest.dto";
import { UserResponse } from "../dto/userResponse.dto";
import { UserRequestMapper } from "../mappers/userRequest.mapper";
import { UserResponseMapper } from "../mappers/userResponse.mapper";
import { UserServicePort } from "../../domain/interfaces/user.interface";
import { User } from "../../domain/models/user.model";
import { UserService } from "../../domain/services/user.service";
import { Role } from "../../../roles/domain/models/role.model";
import { RoleService } from "../../../roles/domain/services/role.service";
import { RoleServicePort } from "../../../roles/domain/interfaces/role.interface";

@Injectable()
export class UserUseCase implements IUserUseCase {

    constructor(
        @Inject(forwardRef(() => UserService)) private readonly userService: UserServicePort,
        @Inject(forwardRef(() => RoleService)) private readonly roleService: RoleServicePort,
        private readonly userRequestMapper: UserRequestMapper,
        private readonly userResponseMapper: UserResponseMapper
    ) { }

    async saveUser(userRequest: UserRequest): Promise<UserResponse> {
        const ownerRole = this.roleService.getRole("owner");
        const role = await this.roleService.getRole(userRequest.roleId);
        const user = await this.userService.saveUser(this.userRequestMapper.toUser(userRequest, role.getId()));
        return this.userResponseMapper.toUserResponse(user, role);
    }

    async getUsers(): Promise<UserResponse[]> {
        const users: User[] = await this.userService.getAllUsers();
        const roles: Role[] = await this.roleService.getAllRoles();
        return this.userResponseMapper.toUserResponseList(users, roles);
    }

    async getUser(userId: string): Promise<UserResponse> {
        const user: User = await this.userService.getUser(userId);
        const role: Role = await this.roleService.getRole(user.getRoleId());
        return this.userResponseMapper.toUserResponse(user, role);
    }
}