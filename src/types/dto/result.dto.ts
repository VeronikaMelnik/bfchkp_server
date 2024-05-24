import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetAllResultsDto {
  @ApiProperty({ default: 1 })
  @IsOptional()
  @Transform(value => Number(value) || 1)
  page: number;

  @ApiProperty({ default: 10 })
  @IsOptional()
  @Transform(value => Number(value) || 10)
  perPage: number;

  @ApiProperty({ required: false, default: '' })
  @IsString()
  @IsOptional()
  searchValue: string;
}

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
