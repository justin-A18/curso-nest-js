import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-dto';

@Injectable()
export class CarsService {
	private cars: Car[] = [];

	create(createCarDto: CreateCarDto) {
		const isCardExists = this.cars.some(car => car.name === createCarDto.name);

		if (isCardExists) {
			throw new BadRequestException('Car with this name already exists');
		}

		const car: Car = { id: uuid(), ...createCarDto };
		this.cars.push(car);

		return car;
	}

	findAll() {
		return this.cars;
	}

	findOneById(id: string) {
		const car = this.cars.find(card => card.id === id);

		if (!car) {
			throw new NotFoundException(`Car with id ${id} not found`);
		}

		return car;
	}

	findOneAndUpdate(id: string, updateCardDto: UpdateCarDto) {
		const updatedCar = this.findOneById(id);

		this.cars = this.cars.map(car => {
			if (car.id === id) {
				return { ...car, name: updateCardDto.name };
			}
			return car;
		});

		return updatedCar;
	}

	findOneAndDelete(id: string) {
		const deleteCar = this.findOneById(id);
		this.cars = this.cars.filter(car => car.id !== id);

		return deleteCar;
	}

	fillCarsWithSeedData(cars: Car[]) {
		this.cars = cars;
	}
}
