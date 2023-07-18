import { UserController } from '../../../../../src/users/infrastructure/controllers/user.controller';
import { UserRequest } from '../../../../../src/users/infrastructure/controllers/dto/userRequest.dto';
import { UserResponse } from '../../../../../src/users/infrastructure/controllers/dto/userResponse.dto';
import { UserRequestMapper } from '../../../../../src/users/infrastructure/controllers/mappers/userRequest.mapper';
import { UserResponseMapper } from '../../../../../src/users/infrastructure/controllers/mappers/userResponse.mapper';
import { ICreateUserUseCase } from '../../../../../src/users/domain/interfaces/createUser.interface';
import { IGetUserUseCase } from '../../../../../src/users/domain/interfaces/getUser.interface';
import { User } from '../../../../../src/users/domain/models/user.model';
import { VALID_USER, VALID_USER_NO_ID } from '../../mocks/user.mock';
import { VALID_USER_REQUEST } from '../../mocks/userRequest.mock';
import { VALID_USER_RESPONSE } from '../../mocks/userResponse.mock';

describe('User Controller', () => {
    let userController: UserController;
    let createUserUseCase: ICreateUserUseCase;
    let getUserUseCase: IGetUserUseCase;
    let userRequestMapper: UserRequestMapper;
    let userResponseMapper: UserResponseMapper;

    beforeEach(() => {
        createUserUseCase = {
            saveUser: jest.fn(),
        };
        getUserUseCase = {
            getUser: jest.fn(),
        };
        userController = new UserController(createUserUseCase, getUserUseCase);
        userRequestMapper = new UserRequestMapper();
        userResponseMapper = new UserResponseMapper();
        (userResponseMapper as any).roleDtoMapper = {
            toRoleDto: jest.fn(),
        };
        (userController as any).userRequestMapper = userRequestMapper;
        (userController as any).userResponseMapper = userResponseMapper;
    });

    describe('POST users (create user)', () => {
        describe('Success', () => {
            it('should save the user and return a user response', async () => {
                const userRequest: UserRequest = VALID_USER_REQUEST;
                const mappedUser: User = VALID_USER_NO_ID;
                const savedUser: User = VALID_USER;
                const userResponse: UserResponse = VALID_USER_RESPONSE;

                jest.spyOn(userRequestMapper, 'toUser').mockReturnValue(mappedUser);
                jest.spyOn(createUserUseCase, 'saveUser').mockResolvedValue(savedUser);
                jest.spyOn(userResponseMapper, 'toUserResponse').mockReturnValue(userResponse);

                const result = await userController.saveUser(userRequest);

                expect(userRequestMapper.toUser).toHaveBeenCalledWith(userRequest);
                expect(createUserUseCase.saveUser).toHaveBeenCalledWith(mappedUser);
                expect(userResponseMapper.toUserResponse).toHaveBeenCalledWith(savedUser);
                expect(result).toEqual(userResponse);
            });
        });

        describe('Failure', () => {
            it('should throw an error if saving the user fails', async () => {
                const userRequest: UserRequest = VALID_USER_REQUEST;
                const mappedUser: User = VALID_USER_NO_ID;
                const expectedError = new Error('Save user failed');

                jest.spyOn(userRequestMapper, 'toUser').mockReturnValue(mappedUser);
                jest.spyOn(createUserUseCase, 'saveUser').mockRejectedValue(expectedError);

                await expect(userController.saveUser(userRequest)).rejects.toThrow(expectedError);
            });
        });
    });

    describe('getUser', () => {
        describe('Success', () => {
            it('should get the user by ID and return a user response', async () => {
                const userId = VALID_USER.id;
                const user: User = VALID_USER;
                const userResponse: UserResponse = VALID_USER_RESPONSE;

                jest.spyOn(getUserUseCase, 'getUser').mockResolvedValue(user);
                jest.spyOn(userResponseMapper, 'toUserResponse').mockReturnValue(userResponse);

                const result = await userController.getUser(userId);

                expect(getUserUseCase.getUser).toHaveBeenCalledWith(userId);
                expect(userResponseMapper.toUserResponse).toHaveBeenCalledWith(user);
                expect(result).toEqual(userResponse);
            });
        });

        xdescribe('Failure', () => {
        });
    });
});