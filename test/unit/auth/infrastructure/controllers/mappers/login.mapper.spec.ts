import { LoginDtoMapper } from '../../../../../../src/auth/infrastructure/controllers/mappers/login.mapper';
import { LoginDto } from '../../../../../../src/auth/infrastructure/controllers/dtos/login.dto';
import { User } from '../../../../../../src/users/domain/models/user.model';
import { LOGIN_DTO } from '../../../mocks/loginDto.mock';
import { VALID_PARTIAL_USER } from '../../../mocks/userPartial.mock';

describe('Login Dto Mapper', () => {
    let loginDtoMapper: LoginDtoMapper;

    beforeEach(() => {
        loginDtoMapper = new LoginDtoMapper();
    });

    describe('toUserPartial', () => {
        it('should map LoginDto to Partial<User>', () => {
            const loginDto: LoginDto = LOGIN_DTO;
            const expectedUserPartial: Partial<User> = VALID_PARTIAL_USER;

            const userPartial = loginDtoMapper.toUserPartial(loginDto);

            expect(userPartial).toEqual(expectedUserPartial);
        });
    });
});
