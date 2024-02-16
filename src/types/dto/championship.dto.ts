import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateChampionshipDto {
  @ApiProperty({ example: 'Рожденственсике звезды', description: 'Название чемпионата' })
  @IsString({ message: 'Должно быть строкой' })
  name?: string;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  disciplineId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  judgeId?: number;
}

export class FindChampionshipByIdDto {
  @ApiProperty({ example: '1', description: 'ChampionshipID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  id?: number;
}
