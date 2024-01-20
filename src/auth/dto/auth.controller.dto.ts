import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegistrationFormDataDto {
  @ApiProperty({
    example: 'John',
    description: "Name's length is 2 to 32 symbols",
  })
  @IsNotEmpty({ message: 'Is required' })
  @IsString({ message: 'Must be string' })
  @Length(2, 32, { message: "Name's length is 2 to 32 symbols" })
  readonly name: string;

  @ApiProperty({
    example: 'Johnsmith@mail.ru',
    description: "Email's length is 6 to 256 symbols",
  })
  @IsNotEmpty({ message: 'Is required' })
  @IsString({ message: 'Must be string' })
  @Length(6, 256, { message: "Email's length is 6 to 256 symbols" })
  @IsEmail({}, { message: 'It is not email' })
  readonly email: string;

  @ApiProperty({
    example: '12345678910',
    description: "Password's length is 8 to 256 symbols",
  })
  @IsNotEmpty({ message: 'Is required' })
  @IsString({ message: 'Must be string' })
  @Length(8, 256, { message: "Password's length is 8 to 256 symbols" })
  readonly password: string;
}
