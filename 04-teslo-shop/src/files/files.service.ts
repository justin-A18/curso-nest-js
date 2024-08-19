import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  public getStaticImage(imageName: string) {
    const path = join(__dirname, '../../static/uploads', imageName);

    if (!existsSync(path)) {
      throw new NotFoundException(`No product found with images ${imageName}`);
    }

    return path;
  }

  public uploadFile(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    return {
      secure_url: file.filename,
    };
  }
}
