import { Role } from '../../../domain/models/role.model';
import { User } from '../../../domain/models/user.model';
import { EmployeeRequest } from '../dtos/employeeRequest.dto';

export class EmployeeRequestMapper {
    toUser(employeeRequest: EmployeeRequest, bossId: string): User {
        const boss: User = new User(
            bossId,
            undefined,
            undefined,
            undefined,
            undefined
        );
        const user: User = new User(
            undefined,
            employeeRequest.name,
            employeeRequest.lastName,
            employeeRequest.password,
            new Role(employeeRequest.roleId, undefined, undefined),
            employeeRequest.email,
            employeeRequest.documentNumber,
            employeeRequest.cellphoneNumber,
            undefined,
            boss
        );
        return user;
    }
}