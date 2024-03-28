import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, Length, IsEmail, IsOptional } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'veronikamelnik00@mail.ru', description: 'Уникальный email' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Неккоректный email' })
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: '246810', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Пароль должен 4-16 символов!' })
  password: string;
}

export class LoginUserDto {

  @ApiProperty({ example: 'admin@admin.com' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Неккоректный email' })
  email: string;

  @ApiProperty({ example: 'Admin123!' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Пароль должен 4-16 символов!' })
  password: string;
}

export class GetAllUsersDto {
  @ApiProperty({default: 1})
  @IsOptional()
  @Transform(value => Number(value) || 1)
  page: number;

  @ApiProperty({default: 10})
  @IsOptional()
  @Transform(value => Number(value) || 10)
  perPage: number;

  @ApiProperty({required: false, default: ''})
  @IsString()
  @IsOptional()
  searchValue: string;
}
