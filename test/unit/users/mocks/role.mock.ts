import { Role } from '../../../../src/users/domain/models/role.model';
import { OWNER_ROLE_ID } from '../../../../src/users/infrastructure/constants';

export const OWNER_ROLE = new Role(OWNER_ROLE_ID, 'owner', 'Owner of a business');
export const OWNER_ROLE_ONLY_ID = new Role(OWNER_ROLE_ID, undefined, undefined);
export const OTHER_ROLE = new Role('0482ca5b-ed02-45bd-adfc-bf800bc67fc9', 'other', 'Other role');
export const OTHER_ROLE_ONLY_ID = new Role('0482ca5b-ed02-45bd-adfc-bf800bc67fc9', undefined, undefined);