import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string;
}