import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tipos } from "./tipos.entity";

@Injectable()
export class TiposService {
  constructor(
    @InjectRepository(Tipos)
    private tipoVeiculoRepository: Repository<Tipos>
  ) {}

  async findAll(): Promise<Tipos[]> {
    return this.tipoVeiculoRepository.find();
  }

  async findById(id: number): Promise<Tipos> {
    return this.tipoVeiculoRepository.findOne({ where: { id: id } });
  }

  async create(tipoVeiculo: Tipos): Promise<Tipos> {
    this.validate(tipoVeiculo);
    return this.tipoVeiculoRepository.save(tipoVeiculo);
  }

  async update(tipoVeiculo: Tipos): Promise<Tipos> {
    await this.findById(tipoVeiculo.id);
    this.validate(tipoVeiculo);
    return this.tipoVeiculoRepository.save(tipoVeiculo);
  }

  async delete(id: number): Promise<void> {
    await this.tipoVeiculoRepository.delete(id);
  }

  validate(tipoVeiculo: Tipos) {
    if (tipoVeiculo.nome.length < 3) {
      throw new BadRequestException("Nome precisa ter mais que 3 caracteres");
    }
  }
}
