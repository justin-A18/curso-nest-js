import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
	{
		id: uuid(),
		name: 'Ford'
	},
	{
		id: uuid(),
		name: 'BMW'
	},
	{
		id: uuid(),
		name: 'Audi'
	},
	{
		id: uuid(),
		name: 'Volkswagen'
	}
];