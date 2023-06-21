import { TypeOrmModule } from "@nestjs/typeorm";
import { Tipos } from "./tipos.entity";
import { Module } from "@nestjs/common";
import { TiposController } from "./tipos.controller";
import { TiposService } from "./tipos.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tipos])],
  exports: [TypeOrmModule, TiposService],
  controllers: [TiposController],
  providers: [TiposService],
})
export class TiposModule {}
