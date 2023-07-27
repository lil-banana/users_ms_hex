import { UserController } from '../../../../../src/users/infrastructure/controllers/user.controller';
import { OwnerRequest } from '../../../../../src/users/infrastructure/controllers/dtos/ownerRequest.dto';
import { EmployeeRequest } from '../../../../../src/users/infrastructure/controllers/dtos/employeeRequest.dto';
import { UserResponse } from '../../../../../src/users/infrastructure/controllers/dtos/userResponse.dto';
import { User } from '../../../../../src/users/domain/models/user.model';
import { VALID_USER, VALID_USER_NO_ID, VALID_USER_NO_ID_NO_DATE } from '../../mocks/user.mock';
import { VALID_OWNER_REQUEST } from '../../mocks/ownerRequest.mock';
import { VALID_USER_RESPONSE } from '../../mocks/userResponse.mock';
import { VALID_EMPLOYEE_REQUEST } from '../../mocks/employeeRequest.mock';
import { VALID_CLIENT_REQUEST } from '../../mocks/clientRequest.mock';
import { ClientRequest } from '../../../../../src/users/infrastructure/controllers/dtos/clientRequest.dto';
import { UserIdDto } from 'src/users/infrastructure/controllers/dtos/userId.dto';
import { VALID_USER_ID_DTO } from '../../mocks/userIdDto.mock';

describe('User Controller', () => {
    let userController: UserController;
    let createUserUseCase: any;
    let getUserUseCase: any;
    let ownerRequestMapper: any;
    let employeeRequestMapper: any;
    let clientRequestMapper: any;
    let userIdDtoMapper: any;
    let userResponseMapper: any;

    beforeEach(() => {
        createUserUseCase = {
            saveUser: jest.fn(),
        };
        getUserUseCase = {
            getUser: jest.fn(),
        };
        ownerRequestMapper = {
            toUser: jest.fn(),
        };
        employeeRequestMapper = {
            toUser: jest.fn(),
        };
        clientRequestMapper = {
            toUser: jest.fn(),
        };
        userIdDtoMapper = {
            toUserIdDto: jest.fn(),
        };
        userResponseMapper = {
            toUserResponse: jest.fn(),
        };
        userController = new UserController(createUserUseCase, getUserUseCase);
        (userController as any).ownerRequestMapper = ownerRequestMapper;
        (userController as any).employeeRequestMapper = employeeRequestMapper;
        (userController as any).clientRequestMapper = clientRequestMapper;
        (userController as any).userIdDtoMapper = userIdDtoMapper;
        (userController as any).userResponseMapper = userResponseMapper;
    });

    describe('POST /users/owner (create owner)', () => {
        describe('Success', () => {
            it('should save the user and return a user response', async () => {
                const ownerRequest: OwnerRequest = VALID_OWNER_REQUEST;
                const mappedUser: User = VALID_USER_NO_ID;
                const savedUser: User = VALID_USER;
                const userResponse: UserResponse = VALID_USER_RESPONSE;

                jest.spyOn(ownerRequestMapper, 'toUser').mockReturnValue(mappedUser);
                jest.spyOn(createUserUseCase, 'saveUser').mockResolvedValue(savedUser);
                jest.spyOn(userIdDtoMapper, 'toUserIdDto').mockReturnValue(userResponse);

                const result = await userController.saveOwner(ownerRequest);

                expect(result).toEqual(userResponse);
                expect(ownerRequestMapper.toUser).toHaveBeenCalledWith(ownerRequest);
                expect(createUserUseCase.saveUser).toHaveBeenCalledWith(mappedUser);
                expect(userIdDtoMapper.toUserIdDto).toHaveBeenCalledWith(savedUser);
            });
        });
    });

    describe('POST /users/employee (create employee)', () => {
        describe('Success', () => {
            it('should save the user and return a user response', async () => {
                const request: any = { user: { userId : VALID_USER.id } };
                const employeeRequest: EmployeeRequest = VALID_EMPLOYEE_REQUEST;
                const mappedUser: User = VALID_USER_NO_ID;
                const savedUserId: string = VALID_USER.id;
                const userIdDto: UserIdDto = VALID_USER_ID_DTO;

                jest.spyOn(employeeRequestMapper, 'toUser').mockReturnValue(mappedUser);
                jest.spyOn(createUserUseCase, 'saveUser').mockResolvedValue(savedUserId);
                jest.spyOn(userIdDtoMapper, 'toUserIdDto').mockReturnValue(userIdDto);

                const result = await userController.saveEmployee(employeeRequest, request);

                expect(result).toEqual(userIdDto);
                expect(employeeRequestMapper.toUser).toHaveBeenCalledWith(employeeRequest, request.user.userId);
                expect(createUserUseCase.saveUser).toHaveBeenCalledWith(mappedUser);
                expect(userIdDtoMapper.toUserIdDto).toHaveBeenCalledWith(savedUserId);
            });
        });
    });

    describe('POST /users/client (create cleint)', () => {
        describe('Success', () => {
            it('should save the user and return a user response', async () => {
                const clientRequest: ClientRequest = VALID_CLIENT_REQUEST;
                const mappedUser: User = VALID_USER_NO_ID_NO_DATE;
                const savedUserId: string = VALID_USER.id;
                const userIdDto: UserIdDto = VALID_USER_ID_DTO;

                jest.spyOn(clientRequestMapper, 'toUser').mockReturnValue(mappedUser);
                jest.spyOn(createUserUseCase, 'saveUser').mockResolvedValue(savedUserId);
                jest.spyOn(userIdDtoMapper, 'toUserIdDto').mockReturnValue(userIdDto);

                const result = await userController.saveClient(clientRequest);

                expect(result).toEqual(userIdDto);
                expect(clientRequestMapper.toUser).toHaveBeenCalledWith(clientRequest);
                expect(createUserUseCase.saveUser).toHaveBeenCalledWith(mappedUser);
                expect(userIdDtoMapper.toUserIdDto).toHaveBeenCalledWith(savedUserId);
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