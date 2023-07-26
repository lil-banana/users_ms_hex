import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The email of the user', example: 'john@doe.com' })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The password of the user', example: 'password' })
    password: string;
}