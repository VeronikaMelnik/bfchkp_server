import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateTitleDto {
  @ApiProperty({ example: 'Мастер Спорта', description: 'Название титула' })
  @IsString({ message: 'Должно быть строкой' })
  name?: string;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  memberId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  resultId?: number;
}
