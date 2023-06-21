import { Module } from "@nestjs/common";
import { MarcaController } from "./marca.controller";
import { MarcaService } from "./marca.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marca } from "./marca.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  exports: [TypeOrmModule, MarcaService],
  controllers: [MarcaController],
  providers: [MarcaService],
})
export class MarcaModule {}
