import { Body, Delete, Injectable, Param, Post } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }
  async findAll() {
    return this.prisma.recipe.findMany();
  }
  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.recipe.delete({
      where: { id },
    });
  }
}
