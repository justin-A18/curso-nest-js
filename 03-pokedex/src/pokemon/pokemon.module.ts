import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { Pokemon, pokemonSchema } from './entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pokemon.name, schema: pokemonSchema }]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
