import { UserResponse } from '../../../../../src/users/infrastructure/controllers/dtos/userResponse.dto';
import { User } from '../../../../../src/users/domain/models/user.model';
import { AuthController } from '../../../../../src/auth/infrastructure/controllers/auth.controller';
import { LoginDto } from '../../../../../src/auth/infrastructure/controllers/dtos/login.dto';
import { TokenDto } from '../../../../../src/auth/infrastructure/controllers/dtos/token.dto';
import { LOGIN_DTO } from '../../mocks/loginDto.mock';
import { VALID_PARTIAL_USER } from '../../mocks/userPartial.mock';
import { TOKEN_DTO } from '../../mocks/tokenDto.mock';

describe('Auth Controller', () => {
    let authController: AuthController;
    let loginUseCase: any;
    let loginDtoMapper: any;
    let tokenDtoMapper: any;

    beforeEach(() => {
        loginUseCase = {
            login: jest.fn(),
        };
        loginDtoMapper = {
            toUserPartial: jest.fn(),
        };
        tokenDtoMapper = {
            toTokenDto: jest.fn(),
        };
        authController = new AuthController(loginUseCase);
        (authController as any).loginDtoMapper = loginDtoMapper;
        (authController as any).tokenDtoMapper = tokenDtoMapper;
    });

    describe('POST /auth/login (create user)', () => {
        describe('Success', () => {
            it('should login a user and return a token', async () => {
                const loginDto: LoginDto = LOGIN_DTO;
                const userPartial: Partial<User> = VALID_PARTIAL_USER;
                const tokenDto: TokenDto = TOKEN_DTO;

                jest.spyOn(loginDtoMapper, 'toUserPartial').mockReturnValue(userPartial);
                jest.spyOn(loginUseCase, 'login').mockResolvedValue(tokenDto.access_token);
                jest.spyOn(tokenDtoMapper, 'toTokenDto').mockReturnValue(tokenDto);

                const result = await authController.login(loginDto);

                expect(result).toEqual(tokenDto);
                expect(loginDtoMapper.toUserPartial).toHaveBeenCalledWith(loginDto);
                expect(loginUseCase.login).toHaveBeenCalledWith(userPartial);
                expect(tokenDtoMapper.toTokenDto).toHaveBeenCalledWith(tokenDto.access_token);
            });
        });
    });
});