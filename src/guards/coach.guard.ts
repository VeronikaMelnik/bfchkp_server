import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminsService } from "src/modules/shared/admin/admin.service";
import { CoachesService } from "src/modules/shared/coach/coach.service";
import { TokenPayload } from "src/types/token/token.types";

@Injectable()
export class CoachRoleGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private adminService: AdminsService,
    private coachService: CoachesService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest()
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
    }
    const bearer = authHeader.split(' ')[0]
    const token = authHeader.split(' ')[1]
    let user: TokenPayload
    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
    }
    try {
      user = this.jwtService.verify(token) as TokenPayload;
    } catch (error) {
      throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
    }
    const admin = await this.adminService.findByPersonId(user.personId)
    const coach = await this.coachService.findByPersonId(user.personId)
    req.user = user;
    if (!admin && !coach) {
      throw new ForbiddenException('Недостаточно прав')
    }
    return true;
  }
}
