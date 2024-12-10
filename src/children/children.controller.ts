import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, Query } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {}

  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }

  @Get()
  findAll(@Query('kereses') kereses? : string) {
    if (kereses == null){
      return this.childrenService.findAll();
    }
    return this.childrenService.findChildByAddress(kereses)
  }

  @Get('good')
  listGoodChildren(){
    return this.childrenService.findGoodChildren();
  }

  @Get('toys')
  listToysWithQuantity(){
    return this.childrenService.findToysWithQuantity();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const child = await this.childrenService.findOne(+id);
    if (child == null){
      throw new NotFoundException("Nincs ilyen ID-val rendelkező gyerek")
    }
    return child;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    try {
      const childToUpdate = await this.childrenService.update(+id, updateChildDto);
      return childToUpdate;
    } catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező gyerek")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const childToRemove = await this.childrenService.remove(+id);
      return childToRemove;
    } catch {
      throw new NotFoundException("Nincs ilyen ID-val rendelkező gyerek")
    }
  }
}
