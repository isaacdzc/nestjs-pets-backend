import { IsString, IsNotEmpty, IsEmail, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsInt()
    @IsNotEmpty()
    age!: number;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
