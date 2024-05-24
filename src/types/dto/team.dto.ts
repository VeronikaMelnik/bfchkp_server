import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class GetAllTeamsDto {
  @ApiProperty({ default: 1 })
  @IsOptional()
  @Transform(value => Number(value) || 1)
  page: number;

  @ApiProperty({ default: 10 })
  @IsOptional()
  @Transform(value => Number(value) || 10)
  perPage: number;

  @ApiProperty({ required: false, default: '' })
  @IsString()
  @IsOptional()
  searchValue: string;
}

export class CreateTeamDto {
  @ApiProperty({ example: 'Black Out', description: 'Название команды' })
  @IsString({ message: 'Должно быть строкой' })
  name?: string;

  @ApiProperty({ example: 'Минск', description: 'Город' })
  @IsString({ message: 'Должно быть строкой' })
  city?: string;

  @ApiProperty({ example: 'Кульман, 75', description: 'Адрес' })
  @IsString({ message: 'Должно быть строкой' })
  address?: string;

  @IsString({ message: 'Должно быть строкой' })
  logo?: string;
}
