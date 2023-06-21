import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { MarcaService } from "./marca.service";
import { Marca } from "./marca.entity";

@Controller("marca")
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) {}

  @Get()
  async findAll(): Promise<Marca[]> {
    return this.marcaService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: number) {
    return this.marcaService.findById(id);
  }

  @Post()
  create(@Body() marca: Marca) {
    return this.marcaService.create(marca);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() marca: Marca) {
    return this.marcaService.update({ ...marca, id });
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.marcaService.remove(id);
  }
}
