import { Role } from '../../../domain/models/role.model';
import { User } from '../../../domain/models/user.model';
import { UserRequest } from '../dtos/userRequest.dto';
import { OWNER_ROLE_ID } from '../../constants'

export class UserRequestMapper {
    toUser(userRequest: UserRequest): User {
        const user: User = new User(
            undefined,
            userRequest.name,
            userRequest.lastName,
            userRequest.documentNumber,
            userRequest.cellphoneNumber,
            userRequest.birthDay,
            userRequest.email,
            userRequest.password,
            new Role(userRequest.roleId ?? OWNER_ROLE_ID, undefined, undefined),
        );
        return user;
    }
}