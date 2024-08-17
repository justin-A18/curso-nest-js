import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @Min(1)
  @IsPositive()
  @IsOptional()
  readonly limit?: number;

  @Min(0)
  @IsPositive()
  @IsOptional()
  readonly offset?: number;
}
