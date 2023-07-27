import { UserIdDto } from '../../../../../../src/users/infrastructure/controllers/dtos/userId.dto';
import { UserIdDtoMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/userId.mapper';
import { VALID_USER } from '../../../mocks/user.mock';
import { VALID_USER_ID_DTO } from '../../../mocks/userIdDto.mock';

describe('User Id Dto Mapper', () => {
    let userIdDtoMapper: UserIdDtoMapper;

    beforeEach(() => {
        userIdDtoMapper = new UserIdDtoMapper();
    });

    describe('toUserIdDto', () => {
        it('should map User to UserIdDto', () => {
            const id: string = VALID_USER.id;
            const expectedUserIdDto: UserIdDto = VALID_USER_ID_DTO;

            const userIdDto = userIdDtoMapper.toUserIdDto(id);

            expect(userIdDto).toEqual(expectedUserIdDto);
        });
    });
});
