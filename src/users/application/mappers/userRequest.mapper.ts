import { User } from '../../domain/models/user.model';
import { UserRequest } from '../dto/userRequest.dto';

export class UserRequestMapper {
    toUser(userRequest: UserRequest, roleId: string): User {
        const user: User = new User(
            undefined,
            userRequest.name,
            userRequest.lastName,
            userRequest.documentNumber,
            userRequest.cellphoneNumber,
            userRequest.birthDay,
            userRequest.email,
            userRequest.password,
            roleId,
        );
        return user;
    }
}