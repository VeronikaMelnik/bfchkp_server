import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateMemberDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  teamId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  personId?: number;
}
