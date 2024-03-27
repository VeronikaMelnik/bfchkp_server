// import {
//   Controller,
//   Delete,
//   Get,
//   Param,
//   ParseIntPipe,
//   Patch,
//   Req,
//   Res,
//   UploadedFile,
//   UseGuards,
//   UseInterceptors,
// } from '@nestjs/common';
// import {
//   ApiBearerAuth,
//   ApiOperation,
//   ApiResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { ImageService } from './image.service';
// import { Response } from 'express';
// import { FileInterceptor } from '@nestjs/platform-express';


// @ApiTags('Images')
// @ApiBearerAuth()
// @Controller()
// export class ImageController {
//   constructor(private service: ImageService) {}

//   @ApiOperation({
//     summary: 'Get characteristics for type',
//     description: 'Get characteristics for type',
//   })
//   @ApiTags('Admins commands')
//   @ApiResponse({ status: 200 })
//   @Delete(deleteCurrent.route)
//   @Roles(RolesEnum.ADMIN)
//   @UseGuards(RolesGuard)
//   deleteImage(@Param(deleteCurrent.mask, ParseIntPipe) id: number) {
//     return this.service.deleteImage(id);
//   }

//   @ApiOperation({
//     summary: 'Get characteristics for type',
//     description: 'Get characteristics for type',
//   })
//   @ApiTags('Images')
//   @ApiResponse({ status: 200, type: [CharacteristicSwaggerScheme] })
//   @Get(get.route)
//   getCharacteristics(
//     @Param(get.mask, ParseIntPipe) id: number,
//     @Res() res: Response,
//   ) {
//     res.setHeader('Content-Type', 'image/jpeg');
//     return this.service.getImage({ id, res });
//   }

//   @ApiOperation({
//     summary: 'Update image',
//     description: 'Update current image',
//   })
//   @ApiResponse({ status: 200 })
//   @Patch(updateCurrent.route)
//   @Roles(RolesEnum.ADMIN)
//   @UseGuards(RolesGuard)
//   @UseInterceptors(
//     FileInterceptor('file', {
//       limits: { files: 1, fileSize: 4 * ONE_MB_IN_BYTES },
//     }),
//   )
//   uploadImage(
//     @UploadedFile() file: Express.Multer.File,
//     @Param(updateCurrent.mask, ParseIntPipe) id: number,
//     @Req() { user }: { user: IUser },
//   ) {
//     return this.service.updateImage({ data: file.buffer, id, userId: user.id });
//   }
// }
