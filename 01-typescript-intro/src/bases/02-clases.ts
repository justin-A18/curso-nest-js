import axios from 'axios';
import { Move, Pokeapi } from '../interfaces/pokeapi.interface';

interface PokemonMoves {
	name: string;
	url: string;
}

export class Pokemon {
	public readonly id: number;
	public name: string;

	constructor (id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	get imgUrl(): string {
		return `https://pokemon.com/${this.id}.png`;
	}

	public scream() {
		console.log(`${this.name.toUpperCase()} !!!`);
	}

	public speak() {
		console.log(`${this.name}, ${this.name}`);
	}

	public async getMoves(): Promise<Move[]> {

		const { data } = await axios.get<Pokeapi>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);

		return data.moves;
	}
}

const charmander = new Pokemon(4, 'Charmander');
console.log(charmander);