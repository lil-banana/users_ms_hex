import { UserEntityMapper } from '../../../../../../../src/users/infrastructure/persistence/typeorm/mappers/userEntity.mapper';
import { UserAdapter } from '../../../../../../../src/users/infrastructure/persistence/typeorm/adapters/user.adapter';
import { User } from '../../../../../../../src/users/domain/models/user.model';
import { UserEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/user.entity';
import { UserAlreadyExistsException } from '../../../../../../../src/users/infrastructure/exceptions/userAlreadyExistsException.exception';
import { UserNotFoundException } from '../../../../../../../src/users/infrastructure/exceptions/userNotFoundException.exception';
import { VALID_USER, VALID_USER_NO_ID } from '../../../../mocks/user.mock';
import { VALID_USER_ENTITY, VALID_USER_ENTITY_NO_ID } from '../../../../mocks/userEntity.mock';

describe('User Adapter', () => {
    let userRepository: any;
    let userEntityMapper: any;
    let userAdapter: UserAdapter;

    beforeEach(() => {
        userRepository = {
            save: jest.fn(),
            findOneById: jest.fn(),
            findOneByEmail: jest.fn()
        };
        userEntityMapper = {
            toUser: jest.fn(),
            toUserEntity: jest.fn()
        };
        userEntityMapper = new UserEntityMapper();
        userAdapter = new UserAdapter(userRepository);
        (userAdapter as any).userEntityMapper = userEntityMapper;
    });

    describe('saveUser', () => {
        describe('Success', () => {
            it('should save a new user', async () => {
                const user: User = VALID_USER_NO_ID;
                const userEntity: UserEntity = VALID_USER_ENTITY_NO_ID;
                const expectedUserEntity: UserEntity = VALID_USER_ENTITY;
                const expectedUser: User = VALID_USER;

                jest.spyOn(userRepository, 'findOneByEmail').mockResolvedValue(null);
                jest.spyOn(userEntityMapper, 'toUserEntity').mockReturnValue(userEntity);
                jest.spyOn(userRepository, 'save').mockResolvedValue(expectedUserEntity);
                jest.spyOn(userEntityMapper, 'toUser').mockReturnValue(expectedUser);

                const result = await userAdapter.saveUser(user);

                expect(result).toEqual(expectedUser);
                expect(userRepository.findOneByEmail).toHaveBeenCalledWith(user.email);
                expect(userEntityMapper.toUserEntity).toHaveBeenCalledWith(user);
                expect(userRepository.save).toHaveBeenCalledWith(userEntity);
                expect(userEntityMapper.toUser).toHaveBeenCalledWith(expectedUserEntity);
            });
        });

        describe('Failure', () => {
            it('should throw UserAlreadyExistsException if user already exists', async () => {
                const user: User = VALID_USER_NO_ID;
                const userEntity: UserEntity = VALID_USER_ENTITY;

                jest.spyOn(userRepository, 'findOneByEmail').mockResolvedValue(userEntity);

                await expect(userAdapter.saveUser(user)).rejects.toThrow(UserAlreadyExistsException);
                expect(userRepository.findOneByEmail).toHaveBeenCalledWith(user.email);
            });
        });
    });

    describe('getUser', () => {
        describe('Success', () => {
            it('should retrieve a user by ID', async () => {
                const userId = VALID_USER.id;
                const expectedUserEntity: UserEntity = VALID_USER_ENTITY;
                const expectedUser: User = VALID_USER;

                jest.spyOn(userRepository, 'findOneById').mockResolvedValue(expectedUserEntity);
                jest.spyOn(userEntityMapper, 'toUser').mockReturnValue(expectedUser);

                const result = await userAdapter.getUser(userId);

                expect(userRepository.findOneById).toHaveBeenCalledWith(userId);
                expect(userEntityMapper.toUser).toHaveBeenCalledWith(expectedUserEntity);
                expect(result).toEqual(expectedUser);
            });
        });

        describe('Failure', () => {
            it('should throw UserNotFoundException if user is not found', async () => {
                const userId = VALID_USER.id;

                jest.spyOn(userRepository, 'findOneById').mockResolvedValue(null);

                await expect(userAdapter.getUser(userId)).rejects.toThrow(UserNotFoundException);
                expect(userRepository.findOneById).toHaveBeenCalledWith(userId);
            });
        });
    });

    describe('getUserByEmail', () => {
        describe('Success', () => {
            it('should retrieve a user by Email', async () => {
                const expectedUserEntity: UserEntity = VALID_USER_ENTITY;
                const expectedUser: User = VALID_USER;

                jest.spyOn(userRepository, 'findOneByEmail').mockResolvedValue(expectedUserEntity);
                jest.spyOn(userEntityMapper, 'toUser').mockReturnValue(expectedUser);

                const result = await userAdapter.getUserByEmail(expectedUser.email);

                expect(result).toEqual(expectedUser);
                expect(userRepository.findOneByEmail).toHaveBeenCalledWith(expectedUser.email);
                expect(userEntityMapper.toUser).toHaveBeenCalledWith(expectedUserEntity);
            });
        });

        describe('Failure', () => {
            it('should throw UserNotFoundException if user is not found', async () => {
                const email = VALID_USER.email;

                jest.spyOn(userRepository, 'findOneByEmail').mockResolvedValue(null);

                await expect(userAdapter.getUserByEmail(email)).rejects.toThrow(UserNotFoundException);
                expect(userRepository.findOneByEmail).toHaveBeenCalledWith(email);
            });
        });
    });
});
