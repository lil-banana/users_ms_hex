import { GetUserUseCase } from '../../../../../src/users/application/usecases/getUser.usecase';
import { UserPersistencePort } from '../../../../../src/users/domain/repositories/user.repository';
import { User } from '../../../../../src/users/domain/models/user.model';
import { VALID_USER } from '../../mocks/user.mock';

describe('Get User Use Case', () => {
    let userRepository: UserPersistencePort;
    let getUserUseCase: GetUserUseCase;

    beforeEach(() => {
        userRepository = {
            saveUser: jest.fn(),
            getUser: jest.fn()
        };
        getUserUseCase = new GetUserUseCase(userRepository);
    });

    describe('Success', () => {
        it('should get the user succesfully', async () => {
            const expectedUser: User = VALID_USER;

            (userRepository.getUser as jest.MockedFunction<typeof userRepository.getUser>).mockResolvedValue(expectedUser);
    
            const result = await getUserUseCase.getUser(expectedUser.id);
    
            expect(result).toEqual(expectedUser);
            expect(userRepository.getUser).toHaveBeenCalledWith(expectedUser.id);
        });
    });

    describe('Failure', () => {
        it('should throw an error if an exception occurs', async () => {
            const user: User = VALID_USER;
            const expectedError = new Error('Error');
    
            (userRepository.getUser as jest.MockedFunction<typeof userRepository.getUser>).mockRejectedValue(expectedError);
    
            await expect(getUserUseCase.getUser(user.id)).rejects.toThrow(expectedError);
        });
    });

});