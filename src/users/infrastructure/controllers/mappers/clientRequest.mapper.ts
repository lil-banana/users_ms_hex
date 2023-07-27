import { Role } from '../../../domain/models/role.model';
import { User } from '../../../domain/models/user.model';
import { ClientRequest } from '../dtos/clientRequest.dto';

export class ClientRequestMapper {
    toUser(clientRequest: ClientRequest): User {
        const user: User = new User(
            undefined,
            clientRequest.name,
            clientRequest.lastName,
            clientRequest.password,
            new Role(clientRequest.roleId, undefined, undefined),
            clientRequest.email,
            clientRequest.documentNumber,
            clientRequest.cellphoneNumber,
            undefined
        );
        return user;
    }
}