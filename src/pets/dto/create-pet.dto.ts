import { IsString, IsNotEmpty, IsDateString, IsNumber, IsOptional, IsUUID, IsEnum } from 'class-validator';
import { Species } from '../enums/species.enum';
import { Gender } from '../enums/genre.enum';

export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEnum(Species)
    @IsNotEmpty()
    species!: Species;

    @IsDateString()
    @IsNotEmpty()
    birthDate!: string;

    @IsNumber()
    @IsOptional()
    weight?: number;

    @IsEnum(Gender)
    @IsNotEmpty()
    gender!: Gender;

    @IsUUID()
    @IsNotEmpty()
    userId!: string;
}
