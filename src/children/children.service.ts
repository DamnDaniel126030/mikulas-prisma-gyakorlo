import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  db: PrismaService

  constructor(db : PrismaService){
    this.db = db;
  }

  create(createChildDto: CreateChildDto) {
    return this.db.child.create({
      data: createChildDto
    })
  }

  findAll() {
    return this.db.child.findMany();
  }

  findOne(id: number) {
    return this.db.child.findUnique({
      where: {
        id: id
      }
    })
  }

  findGoodChildren(){
    return this.db.child.findMany({
      where: {
        goodOrBad: true
      }
    })
  }

  findToysWithQuantity(){
    return this.db.child.groupBy({
      by: ['toy'],
      _count: {
        toy: true
      },
      where: {
        toy: {
          not: null
        }
      }
    })
  }

  findChildByAddress(address: string){
    return this.db.child.findMany({
      where: {
        address: address
      }
    })
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return this.db.child.update({
      data: updateChildDto,
      where: {
        id: id
      }
    })
  }

  remove(id: number) {
    return this.db.child.delete({
      where: {
        id: id
      }
    })
  }
}
