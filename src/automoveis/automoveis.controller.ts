import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { AutomoveisService } from "./automoveis.service";
import { Automovel } from "./automovel.entity";

@Controller("automoveis")
export class AutomoveisController {
  constructor(private readonly automoveisService: AutomoveisService) {}

  @Get()
  findAll(): Promise<Automovel[]> {
    return this.automoveisService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: number) {
    return this.automoveisService.findById(id);
  }

  @Post()
  create(@Body() automovel: Automovel) {
    return this.automoveisService.create(automovel);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() automovel: Automovel) {
    return this.automoveisService.update({ ...automovel, id });
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.automoveisService.remove(id);
  }
}
