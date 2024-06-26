import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from 'typeorm';
import { CreateTeamDto, UpdateTeamDto } from 'src/types/dto/team.dto';
import { CreateCoachDto } from 'src/types/dto/coach.dto';
import { AdminsAccessService } from './adminAccess.service';
import { AdminRoleGuard } from 'src/guards/admin.guard';
import { CreateAdminDto } from 'src/types/dto/admin.dto';
import { CreateNewsDto } from 'src/types/dto/news.dto';
import { TokenPayload } from 'src/types/token/token.types';
import { UpdateDictionaryDto } from 'src/types/dto/dictionary.dto';
import { fileSchema } from 'src/types/file'
import { FileInterceptor } from '@nestjs/platform-express';
import { ONE_MB_IN_BYTES } from 'src/constants';
import { Discipline, Member, Title } from 'src/database';
import { MembersService } from 'src/modules/shared/member/member.service';
import { DisciplinesService } from 'src/modules/shared/discipline/discipline.service';
import { TitlesService } from 'src/modules/shared/title/title.service';
import { CreateMemberDto } from 'src/types/dto/member.dto';
import { PaginationDto } from 'src/types/dto/pagination.dto';
import { CreateChampionshipDto } from 'src/types/dto/championship.dto';
import { CreateResultDto } from 'src/types/dto/result.dto';

@ApiTags('Команды администратора')
@ApiBearerAuth()
@UseGuards(AdminRoleGuard)
@Controller('api/admin')
export class AdminsAccessController {

  constructor(
    private adminsService: AdminsAccessService,
    private memberService: MembersService,
    private disciplineService: DisciplinesService,
    private titleService: TitlesService,
  ) {
  }

  @ApiOperation({ summary: 'Создание админа' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/')
  createAdmin(@Body() data: CreateAdminDto) {
    return this.adminsService.createAdmin(data);
  }

  @ApiOperation({ summary: 'Создание чемпионата' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/championships')
  createChampionship(@Body() data: CreateChampionshipDto) {
    return this.adminsService.createChampionship(data);
  }

  @ApiOperation({ summary: 'Создание тренера' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/coach')
  createCoach(@Body() data: CreateCoachDto) {
    return this.adminsService.createCoach(data);
  }

  @ApiOperation({ summary: 'Создание команды' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/team')
  createTeam(@Body() data: CreateTeamDto) {
    return this.adminsService.createTeam(data);
  }

  @ApiOperation({ summary: 'Редактирование команды' })
  @ApiResponse({ status: 200, type: Admin })
  @Patch('/team/:id')
  updateTeam(@Param('id', ParseIntPipe) id: number,@Body() data: UpdateTeamDto) {
    return this.adminsService.updateTeam({...data, id});
  }

  @ApiOperation({ summary: 'Удаление команды' })
  @ApiResponse({ status: 200, type: Admin })
  @Delete('/team/:id')
  deleteTeam(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.deleteTeam(id);
  }

  @ApiOperation({ summary: 'Удаление результата' })
  @ApiResponse({ status: 200, type: Admin })
  @Delete('/result/:id')
  deleteResult(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.deleteResult(id);
  }
  
  @ApiOperation({ summary: 'Редактирование результата' })
  @ApiResponse({ status: 200, type: Admin })
  @Patch('/result/:id')
  updateResult(@Param('id', ParseIntPipe) id: number,@Body() data: CreateResultDto) {
    return this.adminsService.updateResult({...data, id});
  }
  
  @ApiOperation({ summary: 'Создание результата' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/result')
  createResult(@Body() data: CreateResultDto) {
    return this.adminsService.createResult(data);
  }

  @ApiOperation({ summary: 'Добавление участника в команду' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/team/members')
  createMember(@Body() data: CreateMemberDto) {
    return this.adminsService.createMember(data);
  }

  @ApiOperation({ summary: 'Удаление участника из команды' })
  @ApiResponse({ status: 200, type: Admin })
  @Delete('/team/member/:id')
  deleteMember(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.deleteMember(id);
  }

  @ApiOperation({ summary: 'Creation news image' })
  @ApiResponse({ status: 200 })
  @ApiConsumes('multipart/form-data')
  @ApiBody(fileSchema)
  @Post('/news/:id/image')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { files: 1, fileSize: 4 * ONE_MB_IN_BYTES },
    }),
  )
  uploadImage(
    @UploadedFile() file: { buffer: Buffer },
    @Req() { user }: { user: TokenPayload },
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.adminsService.createNewsImage({ data: file.buffer, user, id });
  }

  @ApiOperation({ summary: 'Создание news' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/news')
  createNews(@Body() data: CreateNewsDto) {
    return this.adminsService.createNews(data);
  }

  @ApiOperation({ summary: 'Редактирование news' })
  @ApiResponse({ status: 200, type: Admin })
  @Patch('/news/:id')
  updateNews(@Param('id', ParseIntPipe) id: number, @Body() data: CreateNewsDto) {
    return this.adminsService.updateNews({ ...data, id });
  }

  @ApiOperation({ summary: 'Удаление news' })
  @ApiResponse({ status: 200, type: Admin })
  @Delete('/news/:id')
  deleteNews(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.deleteNews(id);
  }

  @ApiOperation({ summary: 'Update dictionary' })
  @ApiResponse({ status: 200, type: Admin })
  @Patch('/dictionary/:id')
  updateDictionary(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateDictionaryDto) {
    return this.adminsService.updateDictionary({ ...data, id });
  }

  @ApiOperation({ summary: 'Все юзеры' })
  @ApiResponse({ status: 200, type: Admin })
  @Get('/users')
  getAll(@Query() data: PaginationDto) {
    return this.adminsService.getAllUsers(data);
  }

  @ApiOperation({ summary: 'Получение всех участников федераций' })
  @ApiResponse({ status: 200, type: [Member] })
  @Get('/members')
  getAllMembers(@Query() data: PaginationDto) {
    return this.memberService.getAllMembers(data);
  }

  @ApiOperation({ summary: 'Получение всех дисциплин' })
  @ApiResponse({ status: 200, type: [Discipline] })
  @Get('/disciplines')
  getAllDisciplines() {
    return this.disciplineService.getAllDisciplines();
  }

  @ApiOperation({ summary: 'Получение всех титулов' })
  @ApiResponse({ status: 200, type: [Title] })
  @Get('/titles')
  getAllTitles() {
    return this.titleService.getAllTitles();
  }

}
