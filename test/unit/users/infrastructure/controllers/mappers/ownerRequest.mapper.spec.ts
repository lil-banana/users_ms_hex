import { User } from '../../../../../../src/users/domain/models/user.model';
import { OwnerRequest } from '../../../../../../src/users/infrastructure/controllers/dtos/ownerRequest.dto';
import { OwnerRequestMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/ownerRequest.mapper';
import { VALID_OWNER_REQUEST } from '../../../mocks/ownerRequest.mock';
import { VALID_USER_NO_ID_NO_ROLE } from '../../../mocks/user.mock';

describe('User Request Mapper', () => {
    let ownerRequestMapper: OwnerRequestMapper;

    beforeEach(() => {
        ownerRequestMapper = new OwnerRequestMapper();
    });

    describe('Success', () => {
        describe('toUser', () => {
            it('should map OwnerRequest to User', () => {
                const ownerRequest: OwnerRequest = VALID_OWNER_REQUEST;
                const expectedUser: User = VALID_USER_NO_ID_NO_ROLE;
    
                const user = ownerRequestMapper.toUser(ownerRequest);
    
                expect(user).toEqual(expectedUser);
            });
        });
    });
});