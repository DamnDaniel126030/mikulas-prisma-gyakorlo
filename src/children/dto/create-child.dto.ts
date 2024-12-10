import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateChildDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsBoolean()
  goodOrBad: boolean;

  @IsString()
  @IsOptional()
  toy?: string;
}
