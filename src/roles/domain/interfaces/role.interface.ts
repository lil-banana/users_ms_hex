import { Role } from '../models/role.model';

export interface RoleServicePort {
    saveRole(role: Role): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    getRole(roleId: string): Promise<Role>;
}