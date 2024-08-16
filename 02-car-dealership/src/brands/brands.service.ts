import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      ...createBrandDto
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {

    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) throw new NotFoundException('Brand not found');

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) throw new NotFoundException('Brand not found');

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto
        };
      }

      return brand;
    });

    return brand;
  }

  remove(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException('Brand not found');

    this.brands = this.brands.filter(brand => brand.id !== id);

    return brand;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
