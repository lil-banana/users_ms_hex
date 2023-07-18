import { ApiProperty } from '@nestjs/swagger';
import { RoleDto } from './role.dto';

export class UserResponse {
    @ApiProperty({ description: 'The unique identifier of the user' })
    id: string;

    @ApiProperty({ description: 'The name of the user', example: 'John' })
    name: string;

    @ApiProperty({ description: 'The last name of the user', example: 'Doe' })
    lastName: string;

    @ApiProperty({ description: 'The document number of the user', example: '1234567890' })
    documentNumber: string;

    @ApiProperty({ description: 'The cellphone number of the user', example: '+571234567890' })
    cellphoneNumber: string;

    @ApiProperty({ description: 'The birth date of the user', example: '1990-01-01' })
    birthDay: Date;

    @ApiProperty({ description: 'The email of the user', example: 'john.doe@example.com' })
    email: string;

    @ApiProperty({ description: 'The role of the user', type: RoleDto })
    role: RoleDto;
}