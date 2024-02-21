import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateDisciplineDto {
  @ApiProperty({ example: 'Диско', description: 'Название дисциплины' })
  @IsString({ message: 'Должно быть строкой' })
  name?: string;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  championshipId?: number;
}
