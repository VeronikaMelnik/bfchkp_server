import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { RegistrationFormDataDto } from './dto/auth.controller.dto';

@ApiTags('Authorization')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  async signUp(@Body() dto: RegistrationFormDataDto) {
    const token = await this.authService.createUser(dto)
    return {
      token,
    };
  }
}
