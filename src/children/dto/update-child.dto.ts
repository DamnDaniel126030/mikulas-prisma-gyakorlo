import { PartialType } from '@nestjs/mapped-types';
import { CreateChildDto } from './create-child.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateChildDto extends PartialType(CreateChildDto) {
  @IsString()
  @IsOptional()
  name? : string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsBoolean()
  @IsOptional()
  goodOrBad?: boolean;

  @IsString()
  @IsOptional()
  toy?: string;
}
