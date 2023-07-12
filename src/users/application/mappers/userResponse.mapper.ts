import { User } from '../../domain/models/user.model';
import { UserResponse } from '../dto/userResponse.dto';
import { Role } from '../../../roles/domain/models/role.model';
import { RoleDtoMapper } from '../../../roles/application/mappers/roleDto.mapper';
import { Inject } from '@nestjs/common'; 

export class UserResponseMapper {

    constructor(@Inject(RoleDtoMapper) private readonly roleDtoMapper: RoleDtoMapper) { }

    toUserResponse(user: User, role: Role): UserResponse {
        const userResponse = new UserResponse();
        userResponse.id = user.getId();
        userResponse.name = user.getName();
        userResponse.lastName = user.getLastName();
        userResponse.documentNumber = user.getDocumentNumber();
        userResponse.cellphoneNumber = user.getCellphoneNumber();
        userResponse.birthDay = user.getBirthDay();
        userResponse.email = user.getEmail();
        userResponse.role = this.roleDtoMapper.toRoleDto(role);
        return userResponse;
    }

    toUserResponseList(userList: User[], roleList: Role[]): UserResponse[] {
        return userList.map(user => {
            const userResponse: UserResponse = new UserResponse();
            userResponse.id = user.getId();
            userResponse.name = user.getName();
            userResponse.lastName = user.getLastName();
            userResponse.documentNumber = user.getDocumentNumber();
            userResponse.cellphoneNumber = user.getCellphoneNumber();
            userResponse.birthDay = user.getBirthDay();
            userResponse.email = user.getEmail();
            userResponse.role = this.roleDtoMapper.toRoleDto(roleList.find(role => role.getId() === user.getId()));
            return userResponse;
        });
    }
}