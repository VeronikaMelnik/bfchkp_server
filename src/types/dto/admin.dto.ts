import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  personId?: number;
}
