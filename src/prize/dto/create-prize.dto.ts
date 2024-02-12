import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePrizeDto {
  @ApiProperty({ example: 'Игрушка', description: 'Название игрушки' })
  @IsString({ message: 'Должно быть строкой' })
  name?: string;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  memberId?: number;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  resultId?: number;
}
