import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService,
    private reflector: Reflector) {

  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    try {
      const req = context.switchToHttp().getRequest()
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
      }
      const user = this.jwtService.verify(token);
      req.user = user;
      if (!user.isAdmin) {
        throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
      }
      return true;
    } catch (e) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
    }
  }
}
