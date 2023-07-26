import { UserController } from '../../../../../src/users/infrastructure/controllers/user.controller';
import { UserRequest } from '../../../../../src/users/infrastructure/controllers/dtos/userRequest.dto';
import { UserResponse } from '../../../../../src/users/infrastructure/controllers/dtos/userResponse.dto';
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
    let createUserUseCase: any;
    let getUserUseCase: any;
    let userRequestMapper: any;
    let userIdDtoMapper: any;
    let userResponseMapper: any;

    beforeEach(() => {
        createUserUseCase = {
            saveUser: jest.fn(),
        };
        getUserUseCase = {
            getUser: jest.fn(),
        };
        userRequestMapper = {
            toUser: jest.fn(),
        };
        userIdDtoMapper = {
            toUserIdDto: jest.fn(),
        };
        userResponseMapper = {
            toUserResponse: jest.fn(),
        };
        userController = new UserController(createUserUseCase, getUserUseCase);
        (userController as any).userRequestMapper = userRequestMapper;
        (userController as any).userIdDtoMapper = userIdDtoMapper;
        (userController as any).userResponseMapper = userResponseMapper;
    });

    describe('POST /users (create user)', () => {
        describe('Success', () => {
            it('should save the user and return a user response', async () => {
                const userRequest: UserRequest = VALID_USER_REQUEST;
                const mappedUser: User = VALID_USER_NO_ID;
                const savedUser: User = VALID_USER;
                const userResponse: UserResponse = VALID_USER_RESPONSE;

                jest.spyOn(userRequestMapper, 'toUser').mockReturnValue(mappedUser);
                jest.spyOn(createUserUseCase, 'saveUser').mockResolvedValue(savedUser);
                jest.spyOn(userIdDtoMapper, 'toUserIdDto').mockReturnValue(userResponse);

                const result = await userController.saveUser(userRequest);

                expect(result).toEqual(userResponse);
                expect(userRequestMapper.toUser).toHaveBeenCalledWith(userRequest);
                expect(createUserUseCase.saveUser).toHaveBeenCalledWith(mappedUser);
                expect(userIdDtoMapper.toUserIdDto).toHaveBeenCalledWith(savedUser);
            });
        });
    });

    describe('GET /users/:id (get user)', () => {
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
    });
});