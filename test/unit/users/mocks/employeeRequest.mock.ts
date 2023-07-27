import { EmployeeRequest } from '../../../../src/users/infrastructure/controllers/dtos/employeeRequest.dto';
import { EMPLOYEE_USER_NO_ID } from './user.mock';

export const VALID_EMPLOYEE_REQUEST: EmployeeRequest = {
    name: EMPLOYEE_USER_NO_ID.name,
    lastName: EMPLOYEE_USER_NO_ID.lastName,
    documentNumber: EMPLOYEE_USER_NO_ID.documentNumber,
    cellphoneNumber: EMPLOYEE_USER_NO_ID.cellphoneNumber,
    birthDay: EMPLOYEE_USER_NO_ID.birthDay,
    email: EMPLOYEE_USER_NO_ID.email,
    password: EMPLOYEE_USER_NO_ID.password,
    roleId: EMPLOYEE_USER_NO_ID.role.id
};