import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateChampionship_JudgeDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  judgeId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  championshipId?: number;
}
