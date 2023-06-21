import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AutomoveisModule } from "./automoveis/automoveis.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "db/data-source";
import { MarcaModule } from "./marca/marca.module";
import { AluguelAutomovelModule } from "./aluguel-automovel/aluguel-automovel.module";
import { TiposModule } from "./tipos/tipos.module";
import { StatisticsModule } from "./statistics/statistics.module";
import { AutomoveisService } from "./automoveis/automoveis.service";
import { MarcaService } from "./marca/marca.service";
import { AluguelAutomovelService } from "./aluguel-automovel/aluguel-automovel.service";
import { TiposService } from "./tipos/tipos.service";
import { AutomoveisController } from "./automoveis/automoveis.controller";
import { MarcaController } from "./marca/marca.controller";
import { AluguelAutomovelController } from "./aluguel-automovel/aluguel-automovel.controller";
import { TiposController } from "./tipos/tipos.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AutomoveisModule,
    MarcaModule,
    AluguelAutomovelModule,
    TiposModule,
    StatisticsModule,
  ],
  controllers: [AutomoveisController, MarcaController, AluguelAutomovelController, TiposController],
  providers: [AutomoveisService, MarcaService, AluguelAutomovelService, TiposService, AppService],
})
export class AppModule {}
