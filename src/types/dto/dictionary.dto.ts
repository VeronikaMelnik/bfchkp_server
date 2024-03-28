import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateDictionaryDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  ru: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  be: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  en: string;
}
