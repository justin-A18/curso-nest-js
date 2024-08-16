import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
	{
		id: uuid(),
		name: 'Ford',
		createAt: new Date().getTime().toString(),
	},
	{
		id: uuid(),
		name: 'BMW',
		createAt: new Date().getTime().toString(),

	},
	{
		id: uuid(),
		name: 'Audi',
		createAt: new Date().getTime().toString(),

	},
	{
		id: uuid(),
		name: 'Volkswagen',
		createAt: new Date().getTime().toString(),
	}
];