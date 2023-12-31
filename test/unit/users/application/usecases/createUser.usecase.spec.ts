import { CreateUserUseCase } from '../../../../../src/users/application/usecases/createUser.usecase';
import { User } from '../../../../../src/users/domain/models/user.model';
import { VALID_USER } from '../../mocks/user.mock';

describe('Create User Use Case', () => {
    let createUserUseCase: CreateUserUseCase;
    let userRepository: any;
    let passwordEncryptionService: any;

    beforeEach(() => {
        userRepository = {
            saveUser: jest.fn(),
            getUser: jest.fn()
        };
        passwordEncryptionService = {
          encryptPassword: jest.fn(),
        };
        createUserUseCase = new CreateUserUseCase(userRepository);
        (createUserUseCase as any).passwordEncryptionService = passwordEncryptionService;
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    describe('Success', () => {
        it('should encrypt the password and save the user', async () => {
            const user: User = VALID_USER;
            const encryptedPassword: string = 'encryptedPassword';
            const savedUser: User = VALID_USER;
            savedUser.password = encryptedPassword;

            (passwordEncryptionService.encryptPassword as jest.MockedFunction<typeof passwordEncryptionService.encryptPassword>).mockResolvedValue(encryptedPassword);
            (userRepository.saveUser as jest.MockedFunction<typeof userRepository.saveUser>).mockResolvedValue(savedUser);
    
            const result = await createUserUseCase.saveUser(user);
    
            expect(result).toEqual(savedUser);
            expect(userRepository.saveUser).toHaveBeenCalledWith(savedUser);
        });
    });

    describe('Failure', () => {
        it('should throw an error if an exception occurs', async () => {
            const user: User = VALID_USER;
            const expectedError = new Error('Error');
    
            (passwordEncryptionService.encryptPassword as jest.MockedFunction<typeof passwordEncryptionService.encryptPassword>).mockRejectedValue(expectedError);
    
            await expect(createUserUseCase.saveUser(user)).rejects.toThrow(expectedError);
        });
    });

});