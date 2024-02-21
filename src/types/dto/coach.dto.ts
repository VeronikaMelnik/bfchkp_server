import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCoachDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  teamId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  personId?: number;

  @ApiProperty({ example: '5', description: 'Опыт(количество лет)' })
  @IsNumber({}, { message: 'Должно быть числом' })
  experience?: number;
}
