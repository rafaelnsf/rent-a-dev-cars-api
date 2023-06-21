import { Module } from "@nestjs/common";
import { AutomoveisController } from "./automoveis.controller";
import { AutomoveisService } from "./automoveis.service";
import { MarcaModule } from "src/marca/marca.module";
import { Automovel } from "./automovel.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Automovel]), MarcaModule],
  exports: [TypeOrmModule, AutomoveisService],
  controllers: [AutomoveisController],
  providers: [AutomoveisService],
})
export class AutomoveisModule {}
