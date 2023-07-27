import { UserEntity } from '../../../../src/users/infrastructure/persistence/typeorm/entities/user.entity';
import { OTHER_USER, VALID_USER } from './user.mock';
import { OTHER_ROLE_ENTITY, OWNER_ROLE_ENTITY } from './roleEntity.mock';

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
    subordinates: undefined,
    boss: undefined,
    createdAt: undefined,
    updatedAt: undefined
}

export const VALID_USER_ENTITY_NO_ROLE: UserEntity = {
    id: VALID_USER.id,
    name: VALID_USER.name,
    lastName: VALID_USER.lastName,
    documentNumber: VALID_USER.documentNumber,
    cellphoneNumber: VALID_USER.cellphoneNumber,
    birthDay: VALID_USER.birthDay,
    email: VALID_USER.email,
    password: VALID_USER.password,
    role: undefined,
    subordinates: undefined,
    boss: undefined,
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
    subordinates: undefined,
    boss: undefined,
    createdAt: undefined,
    updatedAt: undefined
}

export const BOSS_ENTITY: UserEntity = {
    id: VALID_USER.id,
    name: VALID_USER.name,
    lastName: VALID_USER.lastName,
    documentNumber: VALID_USER.documentNumber,
    cellphoneNumber: VALID_USER.cellphoneNumber,
    birthDay: VALID_USER.birthDay,
    email: VALID_USER.email,
    password: VALID_USER.password,
    role: OWNER_ROLE_ENTITY,
    subordinates: undefined,
    boss: undefined,
    createdAt: undefined,
    updatedAt: undefined
}

export const EMPLOYEE_ENTITY: UserEntity = {
    id: OTHER_USER.id,
    name: OTHER_USER.name,
    lastName: OTHER_USER.lastName,
    documentNumber: OTHER_USER.documentNumber,
    cellphoneNumber: OTHER_USER.cellphoneNumber,
    birthDay: OTHER_USER.birthDay,
    email: OTHER_USER.email,
    password: OTHER_USER.password,
    role: OTHER_ROLE_ENTITY,
    subordinates: undefined,
    boss: BOSS_ENTITY,
    createdAt: undefined,
    updatedAt: undefined
}