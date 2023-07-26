import { User } from '../../../domain/models/user.model';
import { UserResponse } from '../dtos/userResponse.dto';
import { RoleDtoMapper } from './roleDto.mapper'; 

export class UserResponseMapper {
    private readonly roleDtoMapper: RoleDtoMapper = new RoleDtoMapper();

    toUserResponse(user: User): UserResponse {
        const userResponse = new UserResponse();
        userResponse.id = user.id;
        userResponse.name = user.name;
        userResponse.lastName = user.lastName;
        userResponse.documentNumber = user.documentNumber;
        userResponse.cellphoneNumber = user.cellphoneNumber;
        userResponse.birthDay = user.birthDay;
        userResponse.email = user.email;
        userResponse.role = this.roleDtoMapper.toRoleDto(user.role);
        return userResponse;
    }
}