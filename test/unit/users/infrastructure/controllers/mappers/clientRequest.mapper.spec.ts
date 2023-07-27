import { User } from '../../../../../../src/users/domain/models/user.model';
import { ClientRequest } from '../../../../../../src/users/infrastructure/controllers/dtos/clientRequest.dto';
import { ClientRequestMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/clientRequest.mapper';
import { VALID_CLIENT_REQUEST } from '../../../mocks/clientRequest.mock';
import { CLIENT_USER_NO_ID } from '../../../mocks/user.mock';

describe('User Request Mapper', () => {
    let clientRequestMapper: ClientRequestMapper;

    beforeEach(() => {
        clientRequestMapper = new ClientRequestMapper();
    });

    describe('Success', () => {
        describe('toUser', () => {
            it('should map ClientRequest to User', () => {
                const clientRequest: ClientRequest = VALID_CLIENT_REQUEST;
                const expectedUser: User = CLIENT_USER_NO_ID;
    
                const user = clientRequestMapper.toUser(clientRequest);
    
                expect(user).toEqual(expectedUser);
            });
        });
    });
});