import { EmployeeRequest } from '../../../../src/users/infrastructure/controllers/dtos/employeeRequest.dto';
import { CLIENT_USER } from './user.mock';

export const VALID_CLIENT_REQUEST: EmployeeRequest = {
    name: CLIENT_USER.name,
    lastName: CLIENT_USER.lastName,
    documentNumber: CLIENT_USER.documentNumber,
    cellphoneNumber: CLIENT_USER.cellphoneNumber,
    email: CLIENT_USER.email,
    password: CLIENT_USER.password,
    roleId: git .role.id
};