import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async runSeed() {
    await this.pokemonModel.deleteMany({}); //elimina todos los registros.

    const { results } = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    const pokemonToInsert = [];

    results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    //Crea un insercion con un monton de entradas.
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
