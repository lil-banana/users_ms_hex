import { UserRequest } from '../../../../src/users/infrastructure/controllers/dto/userRequest.dto';
import { OTHER_ROLE_ONLY_ID } from './role.mock';
import { VALID_USER_NO_ID, VALID_USER_NO_ID_NO_ROLE } from './user.mock';

export const VALID_USER_REQUEST: UserRequest = {
    name: VALID_USER_NO_ID.name,
    lastName: VALID_USER_NO_ID.lastName,
    documentNumber: VALID_USER_NO_ID.documentNumber,
    cellphoneNumber: VALID_USER_NO_ID.cellphoneNumber,
    birthDay: VALID_USER_NO_ID.birthDay,
    email: VALID_USER_NO_ID.email,
    password: VALID_USER_NO_ID.password,
    roleId: OTHER_ROLE_ONLY_ID.id
};

export const VALID_USER_REQUEST_NO_ROLE: UserRequest = {
    name: VALID_USER_NO_ID_NO_ROLE.name,
    lastName: VALID_USER_NO_ID_NO_ROLE.lastName,
    documentNumber: VALID_USER_NO_ID_NO_ROLE.documentNumber,
    cellphoneNumber: VALID_USER_NO_ID_NO_ROLE.cellphoneNumber,
    birthDay: VALID_USER_NO_ID_NO_ROLE.birthDay,
    email: VALID_USER_NO_ID_NO_ROLE.email,
    password: VALID_USER_NO_ID_NO_ROLE.password,
};