import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBrandDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string

	@IsOptional()
	@Transform(() => new Date().getTime().toString())
	readonly createAt: string
}
