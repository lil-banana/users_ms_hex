import { User } from '../../../../../../../src/users/domain/models/user.model';
import { UserEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/user.entity';
import { Role } from '../../../../../../../src/users/domain/models/role.model';
import { RoleEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/role.entity';
import { RoleEntityMapper } from '../../../../../../../src/users/infrastructure/persistence/typeorm/mappers/roleEntity.mapper';
import { UserEntityMapper } from '../../../../../../../src/users/infrastructure/persistence/typeorm/mappers/userEntity.mapper';
import { OTHER_ROLE_ENTITY, OWNER_ROLE_ENTITY } from '../../../../mocks/roleEntity.mock';
import { VALID_USER_ENTITY, VALID_USER_ENTITY_NO_ROLE, EMPLOYEE_ENTITY } from '../../../../mocks/userEntity.mock';
import { OWNER_ROLE } from '../../../../mocks/role.mock';
import { EMPLOYEE_USER, VALID_USER, VALID_USER_NO_ROLE } from '../../../../mocks/user.mock';

describe('User Entity Mapper', () => {
    let userEntityMapper: UserEntityMapper;
    let roleEntityMapper: RoleEntityMapper;

    beforeEach(() => {
        roleEntityMapper = new RoleEntityMapper();
        userEntityMapper = new UserEntityMapper();
        (userEntityMapper as any).roleEntityMapper = roleEntityMapper;
    });

    describe('toUser', () => {
        it('should map UserEntity to User', () => {
            const userEntity: UserEntity = EMPLOYEE_ENTITY;
            const expectedUser: User = EMPLOYEE_USER;

            const user = userEntityMapper.toUser(userEntity);

            expect(user).toEqual(expectedUser);
        });

        it('should map UserEntity to User if no role and no boss provided', () => {
            const userEntity: UserEntity = VALID_USER_ENTITY_NO_ROLE;
            const expectedUser: User = VALID_USER_NO_ROLE;

            const user = userEntityMapper.toUser(userEntity);

            expect(user).toEqual(expectedUser);
        });
    });

    describe('toUserEntity', () => {
        it('should map User to UserEntity', () => {
            const user: User = EMPLOYEE_USER;
            const expectedUserEntity: UserEntity = EMPLOYEE_ENTITY;

            const userEntity = userEntityMapper.toUserEntity(user);

            expect(userEntity).toEqual(expectedUserEntity);
        });

        it('should map User to UserEntity if no role and no boss provided', () => {
            const user: User = VALID_USER_NO_ROLE;
            const expectedUserEntity: UserEntity = VALID_USER_ENTITY_NO_ROLE;

            const userEntity = userEntityMapper.toUserEntity(user);

            expect(userEntity).toEqual(expectedUserEntity);
        });
    });
});