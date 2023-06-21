import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Automovel } from "./automovel.entity";

@Injectable()
export class AutomoveisService {
  constructor(
    @InjectRepository(Automovel)
    private readonly automovelRepository: Repository<Automovel>
  ) {}

  async findAll(): Promise<Automovel[]> {
    return this.automovelRepository.find();
  }

  async findById(id: number): Promise<Automovel> {
    return this.automovelRepository.findOne({ where: { id } });
  }

  async create(automovel: Automovel): Promise<Automovel> {
    this.validate(automovel);
    return this.automovelRepository.save(automovel);
  }

  async update(automovel: Automovel): Promise<Automovel> {
    await this.findById(automovel.id);
    this.validate(automovel);
    return this.automovelRepository.save(automovel);
  }

  async remove(id: number): Promise<void> {
    await this.automovelRepository.delete(id);
  }

  validate(automovel: Automovel) {
    const automovelYear = new Date(automovel.ano).getFullYear();
    console.log("automovelYear", automovelYear);
    if (1970 >= automovelYear) {
      throw new BadRequestException("O ano do automóvel deve ser maior que 1970");
    }
    const kmRodado = parseInt(automovel.kmRodado);
    console.log(kmRodado);
    if (kmRodado >= 200000) {
      throw new BadRequestException("km rodado do veiculo deve ser menor que 200000");
    }
    const valorVeiculo = parseInt(automovel.valorVeiculo);
    if (valorVeiculo >= 300000) {
      throw new BadRequestException("valor do veiculo deve ser menor que 300000");
    }
    const valorDiaria = parseInt(automovel.valorDiaria);
    if (valorDiaria <= 100) {
      throw new BadRequestException("valor da diaria deve ser maior que 100");
    }
  }
}
