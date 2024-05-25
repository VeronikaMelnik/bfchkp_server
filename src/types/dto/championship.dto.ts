import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsInt } from "class-validator";

export class CreateChampionshipDto {
  @ApiProperty({ example: 'Рожденственсике звезды', description: 'Название чемпионата' })
  @IsString({ message: 'Должно быть строкой' })
  name: string;

  @ApiProperty({ example: 1716628853679, description: 'timestamp даты проведения (мс)' })
  @IsNumber()
  @IsInt()
  date: number
}

export class FindChampionshipByIdDto {
  @ApiProperty({ example: '1', description: 'ChampionshipID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  id?: number;
}
