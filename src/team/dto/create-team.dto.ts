import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

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
