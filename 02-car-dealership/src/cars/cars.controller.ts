import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-dto';


@Controller('cars')
export class CarsController {

	constructor (private readonly cars: CarsService) {}

	@Get('/')
	getAllcars() {
		return this.cars.findAll();
	}

	@Get('/:id')
	getCarById(
		@Param('id', ParseUUIDPipe) id: string
	) {
		return this.cars.findOneById(id);
	}

	@Post('/new')
	createCar(
		@Body() createCarDto: CreateCarDto
	) {
		return this.cars.create(createCarDto);
	}

	@Put('/:id')
	updateCar(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateCarDto: UpdateCarDto
	) {
		return this.cars.findOneAndUpdate(id, updateCarDto);
	}

	@Delete('/:id')
	deleteCar(
		@Param('id', ParseUUIDPipe) id: string
	) {
		return this.cars.findOneAndDelete(id);
	}
}
