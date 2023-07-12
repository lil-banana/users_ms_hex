import { RoleDto } from "../../../roles/application/dto/role.dto";

export class UserResponse {
    id: string;
    name: string;
    lastName: string;
    documentNumber: string;
    cellphoneNumber: string;
    birthDay: Date;
    email: string;
    role: RoleDto;
}