import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { AluguelAutomovelService } from "./aluguel-automovel.service";
import { AluguelAutomovel } from "./aluguel-automovel.entity";

@Controller("aluguel-automoveis")
export class AluguelAutomovelController {
  constructor(private readonly aluguelAutomovelService: AluguelAutomovelService) {}

  @Get()
  findAll(): Promise<AluguelAutomovel[]> {
    return this.aluguelAutomovelService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: number) {
    return this.aluguelAutomovelService.findById(id);
  }

  @Post()
  create(@Body() aluguelAutomovel: AluguelAutomovel) {
    return this.aluguelAutomovelService.create(aluguelAutomovel);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() aluguelAutomovel: AluguelAutomovel) {
    return this.aluguelAutomovelService.update({ ...aluguelAutomovel, id });
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.aluguelAutomovelService.remove(id);
  }
}
