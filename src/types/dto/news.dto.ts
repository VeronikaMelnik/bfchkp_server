import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsString } from "class-validator";
import { UpdateDictionaryDto } from "./dictionary.dto";

export class GetAllNewsDto {
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

export class CreateNewsDto {
  @ApiProperty()
  title: UpdateDictionaryDto;

  @ApiProperty()
  description: UpdateDictionaryDto;
}
