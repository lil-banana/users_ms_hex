import { User } from '../../../../../../src/users/domain/models/user.model';
import { EmployeeRequest } from '../../../../../../src/users/infrastructure/controllers/dtos/employeeRequest.dto';
import { EmployeeRequestMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/employeeRequest.mapper';
import { VALID_EMPLOYEE_REQUEST } from '../../../mocks/employeeRequest.mock';
import { VALID_USER_ONLY_ID, EMPLOYEE_USER_NO_ID } from '../../../mocks/user.mock';

describe('User Request Mapper', () => {
    let employeeRequestMapper: EmployeeRequestMapper;

    beforeEach(() => {
        employeeRequestMapper = new EmployeeRequestMapper();
    });

    describe('Success', () => {
        describe('toUser', () => {
            it('should map EmployeeRequest to User', () => {
                const bossId: string = VALID_USER_ONLY_ID.id;
                const employeeRequest: EmployeeRequest = VALID_EMPLOYEE_REQUEST;
                const expectedUser: User = EMPLOYEE_USER_NO_ID;
    
                const user = employeeRequestMapper.toUser(employeeRequest, bossId);
    
                expect(user).toEqual(expectedUser);
            });
        });
    });
});