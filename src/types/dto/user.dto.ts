import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'veronikamelnik00@mail.ru', description: 'Уникальный email' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Неккоректный email' })
  email: string;

  @ApiProperty({ example: '246810', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Пароль должен 4-16 символов!' })
  password: string;

  @ApiProperty({ example: '1', description: 'ID' })
  @IsNumber({}, { message: 'Должно быть числом' })
  personId?: number;
}
