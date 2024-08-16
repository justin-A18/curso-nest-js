import { IsInt, IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
