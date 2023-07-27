import { LoginUseCase } from '../../../../../src/auth/application/usecases/login.usecase';
import { User } from '../../../../../src/users/domain/models/user.model';
import { VALID_PARTIAL_USER } from '../../mocks/userPartial.mock';
import { VALID_USER } from '../../../users/mocks/user.mock';
import { PasswordDoNotMatchException } from '../../../../../src/auth/application/exceptions/passwordDoNotMatch.exception';

describe('Login Use Case', () => {
    let loginUseCase: LoginUseCase;
    let userRepository: any;
    let tokenService: any;
    let passwordEncryptionService: any;

    beforeEach(() => {
        userRepository = {
            getUserByEmail: jest.fn()
        };
        tokenService = {
            signToken: jest.fn()
        };
        passwordEncryptionService = {
            checkPassword: jest.fn()
        };
        loginUseCase = new LoginUseCase(userRepository, tokenService);
        (loginUseCase as any).passwordEncryptionService = passwordEncryptionService;
    });

    describe('Success', () => {
        it('should login an user', async () => {
            const partialUser: Partial<User> = VALID_PARTIAL_USER;
            const savedUser: User = VALID_USER;

            jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(savedUser);
            jest.spyOn(passwordEncryptionService, 'checkPassword').mockResolvedValue(true);
            jest.spyOn(tokenService, 'signToken').mockResolvedValue('token');

            const token = await loginUseCase.login(partialUser);

            expect(token).toEqual('token');
            expect(userRepository.getUserByEmail).toHaveBeenCalledWith(partialUser.email);
            expect(passwordEncryptionService.checkPassword).toHaveBeenCalledWith(partialUser.password, savedUser.password);
            expect(tokenService.signToken).toHaveBeenCalledWith(savedUser.id, savedUser.role.name, undefined);
        });
    });

    describe('Failure', () => {
        it('should throw a PasswordDoNotMatchException if password does not match', async () => {
            const partialUser: Partial<User> = VALID_PARTIAL_USER;
            const savedUser: User = VALID_USER;

            jest.spyOn(console, 'error').mockImplementation(() => { });
            jest.spyOn(userRepository, 'getUserByEmail').mockResolvedValue(savedUser);
            jest.spyOn(passwordEncryptionService, 'checkPassword').mockResolvedValue(false);

            await expect(loginUseCase.login(partialUser)).rejects.toThrow(PasswordDoNotMatchException);
        });

        it('should throw an error if an unexpected exception occurs', async () => {
            const partialUser: Partial<User> = VALID_PARTIAL_USER;

            jest.spyOn(console, 'error').mockImplementation(() => { });
            jest.spyOn(userRepository, 'getUserByEmail').mockRejectedValue(new Error());

            await expect(loginUseCase.login(partialUser)).rejects.toThrow(Error);
        });
    });

});