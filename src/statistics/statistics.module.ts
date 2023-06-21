import { Module } from "@nestjs/common";
import { StatisticsController } from "./statistics.controller";
import { MarcaService } from "src/marca/marca.service";
import { TiposService } from "src/tipos/tipos.service";
import { AluguelAutomovelService } from "src/aluguel-automovel/aluguel-automovel.service";
import { AutomoveisService } from "src/automoveis/automoveis.service";
import { MarcaModule } from "src/marca/marca.module";
import { AluguelAutomovelModule } from "src/aluguel-automovel/aluguel-automovel.module";
import { AutomoveisModule } from "src/automoveis/automoveis.module";
import { TiposModule } from "src/tipos/tipos.module";

@Module({
  imports: [MarcaModule, AluguelAutomovelModule, AutomoveisModule, TiposModule],
  controllers: [StatisticsController],
  providers: [],
})
export class StatisticsModule {}
