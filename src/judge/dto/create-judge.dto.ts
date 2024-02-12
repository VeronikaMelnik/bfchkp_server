import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateJudgeDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  personId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  championshipId?: number;
}
