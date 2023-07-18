import { User } from '../../../../../../src/users/domain/models/user.model';
import { UserRequest } from '../../../../../../src/users/infrastructure/controllers/dto/userRequest.dto';
import { UserRequestMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/userRequest.mapper';
import { VALID_USER_REQUEST, VALID_USER_REQUEST_NO_ROLE } from '../../../mocks/userRequest.mock';
import { VALID_USER_NO_ID, VALID_USER_NO_ID_NO_ROLE } from '../../../mocks/user.mock';

describe('User Request Mapper', () => {
    let userRequestMapper: UserRequestMapper;

    beforeEach(() => {
        userRequestMapper = new UserRequestMapper();
    });

    describe('Success', () => {
        describe('toUser', () => {
            it('should map UserRequest to User', () => {
                const userRequest: UserRequest = VALID_USER_REQUEST;
                const expectedUser: User = VALID_USER_NO_ID;
    
                const user = userRequestMapper.toUser(userRequest);
    
                expect(user).toEqual(expectedUser);
            });
    
            it('should map UserRequest to User with owner roleId if not provided', () => {
                const userRequest: UserRequest = VALID_USER_REQUEST_NO_ROLE;
                const expectedUser: User = VALID_USER_NO_ID_NO_ROLE;
    
                const user = userRequestMapper.toUser(userRequest);
    
                expect(user).toEqual(expectedUser);
            });
        });
    });
});