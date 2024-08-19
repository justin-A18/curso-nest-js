import {
  UseInterceptors,
  UploadedFile,
  Controller,
  Post,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from './helpers';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('uploads/:fileName')
  findUploadFile(
    @Param('fileName') fileName: string,
    @Res()
    res: Response,
  ) {
    const path = this.filesService.getStaticImage(fileName);
    res.sendFile(path);
  }

  @Post('uploads')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/uploads',
        filename: fileNamer,
      }),
      //limits: { fileSize: 1000 },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.filesService.uploadFile(file);
  }
}
