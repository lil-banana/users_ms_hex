import { User } from '../../../../domain/models/user.model';
import { UserEntity } from '../entities/user.entity';
import { RoleEntityMapper } from './roleEntity.mapper';

export class UserEntityMapper {
    private readonly roleEntityMapper: RoleEntityMapper = new RoleEntityMapper();

    toUser(userEntity: UserEntity): User {
        const user: User = new User(
            userEntity.id,
            userEntity.name,
            userEntity.lastName,
            userEntity.password,
            userEntity.role ? this.roleEntityMapper.toRole(userEntity.role) : undefined,
            userEntity.email,
            userEntity.documentNumber,
            userEntity.cellphoneNumber,
            userEntity.birthDay,
            userEntity.boss ? this.toUser(userEntity.boss) : undefined
        );
        return user;
    }

    toUserEntity(user: User): UserEntity {
        const userEntity: UserEntity = new UserEntity();
        userEntity.id = user.id;
        userEntity.name = user.name;
        userEntity.lastName = user.lastName;
        userEntity.documentNumber = user.documentNumber;
        userEntity.cellphoneNumber = user.cellphoneNumber;
        userEntity.birthDay = user.birthDay;
        userEntity.email = user.email;
        userEntity.password = user.password;
        userEntity.role = user.role ? this.roleEntityMapper.toRoleEntity(user.role): undefined;
        userEntity.boss = user.boss ? this.toUserEntity(user.boss) : undefined;
        return userEntity;
    }
}