import { OwnerRequest } from '../../../../src/users/infrastructure/controllers/dtos/ownerRequest.dto';
import { VALID_USER_NO_ID_NO_ROLE } from './user.mock';

export const VALID_OWNER_REQUEST: OwnerRequest = {
    name: VALID_USER_NO_ID_NO_ROLE.name,
    lastName: VALID_USER_NO_ID_NO_ROLE.lastName,
    documentNumber: VALID_USER_NO_ID_NO_ROLE.documentNumber,
    cellphoneNumber: VALID_USER_NO_ID_NO_ROLE.cellphoneNumber,
    birthDay: VALID_USER_NO_ID_NO_ROLE.birthDay,
    email: VALID_USER_NO_ID_NO_ROLE.email,
    password: VALID_USER_NO_ID_NO_ROLE.password,
    roleId: undefined
};