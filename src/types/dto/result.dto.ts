import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateResultDto {
  @ApiProperty({ example: '1', description: 'Место' })
  @IsNumber({}, { message: 'Должно быть числом' })
  place?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  memberId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  championshipId?: number;
}
