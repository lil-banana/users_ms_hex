import { Role } from '../models/role.model';

export const ROLE_PERSISTENCE_PORT = 'ROLE_PERSISTENCE_PORT';

export interface RolePersistencePort {
    saveRole(role: Role): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRole(roleId: string): Promise<Role>;
}