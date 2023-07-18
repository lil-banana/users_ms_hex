import { User } from '../../../../../../../src/users/domain/models/user.model';
import { UserEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/user.entity';
import { Role } from '../../../../../../../src/users/domain/models/role.model';
import { RoleEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/role.entity';
import { RoleEntityMapper } from '../../../../../../../src/users/infrastructure/persistence/typeorm/mappers/roleEntity.mapper';
import { UserEntityMapper } from '../../../../../../../src/users/infrastructure/persistence/typeorm/mappers/userEntity.mapper';
import { OWNER_ROLE_ENTITY } from '../../../../mocks/roleEntity.mock';
import { VALID_USER_ENTITY } from '../../../../mocks/userEntity.mock';
import { OWNER_ROLE } from '../../../../mocks/role.mock';
import { VALID_USER } from '../../../../mocks/user.mock';

describe('User Entity Mapper', () => {
  let userEntityMapper: UserEntityMapper;
  let roleEntityMapper: RoleEntityMapper;

  beforeEach(() => {
    roleEntityMapper = {
      toRole: jest.fn(),
      toRoleEntity: jest.fn(),
    };
    userEntityMapper = new UserEntityMapper();
    (userEntityMapper as any).roleEntityMapper = roleEntityMapper;
  });

  describe('toUser', () => {
    it('should map UserEntity to User', () => {
      const roleEntity: RoleEntity = OWNER_ROLE_ENTITY;
      const userEntity: UserEntity = VALID_USER_ENTITY;
      const expectedRole: Role = OWNER_ROLE;
      const expectedUser: User = VALID_USER;

      jest.spyOn(roleEntityMapper, 'toRole').mockReturnValue(expectedRole);

      const user = userEntityMapper.toUser(userEntity);

      expect(user).toEqual(expectedUser);
      expect(roleEntityMapper.toRole).toHaveBeenCalledWith(roleEntity);
    });
  });

  describe('toUserEntity', () => {
    it('should map User to UserEntity', () => {
      const role: Role = OWNER_ROLE;
      const user: User = VALID_USER;
      const expectedRoleEntity: RoleEntity = OWNER_ROLE_ENTITY;
      const expectedUserEntity: UserEntity = VALID_USER_ENTITY;

      jest.spyOn(roleEntityMapper, 'toRoleEntity').mockReturnValue(expectedRoleEntity);

      const userEntity = userEntityMapper.toUserEntity(user);

      expect(userEntity).toEqual(expectedUserEntity);
      expect(roleEntityMapper.toRoleEntity).toHaveBeenCalledWith(role);
    });
  });
});