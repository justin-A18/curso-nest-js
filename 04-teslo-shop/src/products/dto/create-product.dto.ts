import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsArray,
  IsInt,
  IsIn,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString({ each: true }) // cada uno de los elementos tiene que ser un string
  @IsArray()
  sizes: string[];

  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
