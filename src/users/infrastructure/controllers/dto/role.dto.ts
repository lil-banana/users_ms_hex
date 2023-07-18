import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
    @ApiProperty({ description: 'The name of the role', example: 'owner' })
    name: string;

    @ApiProperty({ description: 'A description of the role', example: 'The owner of a restaurant' })
    description: string;
}