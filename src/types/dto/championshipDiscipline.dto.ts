import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateChampionshipDisciplineDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  disciplineId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  championshipId?: number;
}
