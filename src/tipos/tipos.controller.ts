import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { Tipos } from "./tipos.entity";
import { TiposService } from "./tipos.service";

@Controller("tipos")
export class TiposController {
  constructor(private tipoVeiculoService: TiposService) {}

  @Get()
  async findAll(): Promise<Tipos[]> {
    return this.tipoVeiculoService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: number): Promise<Tipos> {
    return this.tipoVeiculoService.findById(id);
  }

  @Post()
  async create(@Body() tipoVeiculo: Tipos): Promise<Tipos> {
    return this.tipoVeiculoService.create(tipoVeiculo);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() tipoVeiculo: Tipos): Promise<Tipos> {
    return this.tipoVeiculoService.update({ ...tipoVeiculo, id });
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    return this.tipoVeiculoService.delete(id);
  }
}
