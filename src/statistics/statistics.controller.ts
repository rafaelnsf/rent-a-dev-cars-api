import { AutomoveisService } from "./../automoveis/automoveis.service";
import { Controller, Get } from "@nestjs/common";
import { AluguelAutomovel } from "src/aluguel-automovel/aluguel-automovel.entity";
import { AluguelAutomovelService } from "src/aluguel-automovel/aluguel-automovel.service";
import { Automovel } from "src/automoveis/automovel.entity";
import { Marca } from "src/marca/marca.entity";
import { MarcaService } from "src/marca/marca.service";
import { Tipos } from "src/tipos/tipos.entity";
import { TiposService } from "src/tipos/tipos.service";

@Controller("statistics")
export class StatisticsController {
  constructor(
    private readonly marcaService: MarcaService,
    private readonly aluguelAutomovelService: AluguelAutomovelService,
    private readonly automoveisService: AutomoveisService,
    private readonly tipos: TiposService
  ) {}

  @Get("/marcas")
  async findAllMarcas(): Promise<Marca[]> {
    return this.marcaService.findAll();
  }
  @Get("/alugueis")
  async findAllAlugueis(): Promise<AluguelAutomovel[]> {
    return this.aluguelAutomovelService.findAll();
  }
  @Get("/automoveis")
  async findAllAutomoveis(): Promise<Automovel[]> {
    return this.automoveisService.findAll();
  }
  @Get("/tipos")
  async findAllTipos(): Promise<Tipos[]> {
    return this.tipos.findAll();
  }
}
