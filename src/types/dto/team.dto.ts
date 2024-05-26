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

  @ApiProperty({ example: 'https://premiumdecor.by/img/brands/caparol.png?ver=156076271629', description: 'URL изображения лого' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  logo?: string;
}

export class UpdateTeamDto {
  @ApiProperty({ example: 'Black Out', description: 'Название команды' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Минск', description: 'Город' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  city?: string;

  @ApiProperty({ example: 'Кульман, 75', description: 'Адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'https://premiumdecor.by/img/brands/caparol.png?ver=156076271629', description: 'URL изображения лого' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  logo?: string;
}
