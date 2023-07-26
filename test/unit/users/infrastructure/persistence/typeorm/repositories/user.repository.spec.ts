import { UserEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/user.entity';
import { UserRepository } from '../../../../../../../src/users/infrastructure/persistence/typeorm/repositories/user.repository';
import { VALID_USER } from '../../../../mocks/user.mock';
import { VALID_USER_ENTITY, VALID_USER_ENTITY_NO_ID } from '../../../../mocks/userEntity.mock';

describe('User Repository', () => {
    let userRepository: UserRepository;
    let entityRepository: any;

    beforeEach(() => {
        entityRepository = {
            save: jest.fn(),
            findOneBy: jest.fn()
        };
        userRepository = new UserRepository(entityRepository);
    });

    describe('Success', () => {
        describe('save', () => {
            it('should save the user', async () => {
                const userEntity: UserEntity = VALID_USER_ENTITY_NO_ID;
                const expectedUserEntity: UserEntity = VALID_USER_ENTITY;

                jest.spyOn(entityRepository, 'save').mockResolvedValue(expectedUserEntity);
    
                const result = await userRepository.save(userEntity);
    
                expect(result).toBe(expectedUserEntity);
                expect(entityRepository.save).toHaveBeenCalledWith(userEntity);
            });
        });
    
        describe('findOneById', () => {
            it('should find a user by id', async () => {
                const userId: string = VALID_USER.id;
                const userEntity: UserEntity = VALID_USER_ENTITY;

                jest.spyOn(entityRepository, 'findOneBy').mockResolvedValue(userEntity);
    
                const result = await userRepository.findOneById(userId);
    
                expect(result).toBe(userEntity);
                expect(entityRepository.findOneBy).toHaveBeenCalledWith({ id: userId });
            });
        });
    
        describe('findOneByEmail', () => {
            it('should find a user by email', async () => {
                const userEntity = VALID_USER_ENTITY;

                jest.spyOn(entityRepository, 'findOneBy').mockResolvedValue(userEntity);
    
                const result = await userRepository.findOneByEmail(userEntity.email);
    
                expect(result).toBe(userEntity);
                expect(entityRepository.findOneBy).toHaveBeenCalledWith({ email: userEntity.email });
            });
        });
    });
});