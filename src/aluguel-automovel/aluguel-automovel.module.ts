import { AluguelAutomovel } from "./aluguel-automovel.entity";
import { Module } from "@nestjs/common";
import { AluguelAutomovelController } from "./aluguel-automovel.controller";
import { AluguelAutomovelService } from "./aluguel-automovel.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([AluguelAutomovel])],
  exports: [TypeOrmModule, AluguelAutomovelService],
  controllers: [AluguelAutomovelController],
  providers: [AluguelAutomovelService],
})
export class AluguelAutomovelModule {}
