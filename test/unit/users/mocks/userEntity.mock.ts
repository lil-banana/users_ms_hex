import { UserEntity } from '../../../../src/users/infrastructure/persistence/typeorm/entities/user.entity';
import { VALID_USER } from './user.mock';
import { OWNER_ROLE_ENTITY } from './roleEntity.mock';

export const VALID_USER_ENTITY: UserEntity = {
    id: VALID_USER.id,
    name: VALID_USER.name,
    lastName: VALID_USER.lastName,
    documentNumber: VALID_USER.documentNumber,
    cellphoneNumber: VALID_USER.cellphoneNumber,
    birthDay: VALID_USER.birthDay,
    email: VALID_USER.email,
    password: VALID_USER.password,
    role: OWNER_ROLE_ENTITY,
    createdAt: undefined,
    updatedAt: undefined
}

export const VALID_USER_ENTITY_NO_ID: UserEntity = {
    id: undefined,
    name: VALID_USER.name,
    lastName: VALID_USER.lastName,
    documentNumber: VALID_USER.documentNumber,
    cellphoneNumber: VALID_USER.cellphoneNumber,
    birthDay: VALID_USER.birthDay,
    email: VALID_USER.email,
    password: VALID_USER.password,
    role: OWNER_ROLE_ENTITY,
    createdAt: undefined,
    updatedAt: undefined
}