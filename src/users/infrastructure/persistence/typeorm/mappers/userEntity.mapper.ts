import { Injectable } from '@nestjs/common';
import { User } from '../../../../domain/models/user.model';
import { UserEntity } from '../entities/user.entity';

export class UserEntityMapper {
    toUser(userEntity: UserEntity): User {
        const user: User = new User(
            userEntity.id,
            userEntity.name,
            userEntity.lastName,
            userEntity.documentNumber,
            userEntity.cellphoneNumber,
            userEntity.birthDay,
            userEntity.email,
            userEntity.password,
            userEntity.roleId
        );
        return user;
    }

    toUserList(userEntityList: UserEntity[]): User[] {
        return userEntityList.map(userEntity => {
            const user: User = new User(
                userEntity.id,
                userEntity.name,
                userEntity.lastName,
                userEntity.documentNumber,
                userEntity.cellphoneNumber,
                userEntity.birthDay,
                userEntity.email,
                userEntity.password,
                userEntity.roleId
            );
            return user;
        });
    }

    toUserEntity(user: User): UserEntity {
        const userEntity: UserEntity = new UserEntity();
        userEntity.id = user.getId();
        userEntity.name = user.getName();
        userEntity.lastName = user.getLastName();
        userEntity.documentNumber = user.getDocumentNumber();
        userEntity.cellphoneNumber = user.getCellphoneNumber();
        userEntity.birthDay = user.getBirthDay();
        userEntity.email = user.getEmail();
        userEntity.password = user.getPassword();
        userEntity.roleId = user.getRoleId();
        return userEntity;
    }
}