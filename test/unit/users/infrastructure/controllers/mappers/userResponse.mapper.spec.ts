import { User } from '../../../../../../src/users/domain/models/user.model';
import { UserResponse } from '../../../../../../src/users/infrastructure/controllers/dtos/userResponse.dto';
import { RoleDtoMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/roleDto.mapper';
import { UserResponseMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/userResponse.mapper';
import { VALID_USER } from '../../../mocks/user.mock';
import { VALID_USER_RESPONSE } from '../../../mocks/userResponse.mock';
import { OWNER_ROLE_DTO } from '../../../mocks/roleDto.mock';

describe('User Response Mapper', () => {
    let userResponseMapper: UserResponseMapper;
    let roleDtoMapper: RoleDtoMapper;

    beforeEach(() => {
        roleDtoMapper = {
            toRoleDto: jest.fn(),
        };
        userResponseMapper = new UserResponseMapper();
        (userResponseMapper as any).roleDtoMapper = roleDtoMapper;
    });

    describe('Success', () => {
        describe('toUserResponse', () => {
            it('should map User to UserResponse', () => {
                const user: User = VALID_USER;
                const expectedUserResponse: UserResponse = VALID_USER_RESPONSE;
    
                jest.spyOn(roleDtoMapper, 'toRoleDto').mockReturnValue(OWNER_ROLE_DTO);
    
                const userResponse = userResponseMapper.toUserResponse(user);
    
                expect(userResponse).toEqual(expectedUserResponse);
                expect(roleDtoMapper.toRoleDto).toHaveBeenCalledWith(user.role);
            });
        });
    });
});