import { Role } from '../../../domain/models/role.model';
import { User } from '../../../domain/models/user.model';
import { OwnerRequest } from '../dtos/ownerRequest.dto';
import { OWNER_ROLE_ID } from '../../constants'

export class OwnerRequestMapper {
    toUser(ownerRequest: OwnerRequest): User {
        const user: User = new User(
            undefined,
            ownerRequest.name,
            ownerRequest.lastName,
            ownerRequest.password,
            new Role(OWNER_ROLE_ID, undefined, undefined),
            ownerRequest.email,
            ownerRequest.documentNumber,
            ownerRequest.cellphoneNumber,
            ownerRequest.birthDay
        );
        return user;
    }
}