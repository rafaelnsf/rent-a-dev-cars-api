import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AluguelAutomovel } from "./aluguel-automovel.entity";

@Injectable()
export class AluguelAutomovelService {
  constructor(
    @InjectRepository(AluguelAutomovel)
    private readonly aluguelAutomovelRepository: Repository<AluguelAutomovel>
  ) {}

  async findAll(): Promise<AluguelAutomovel[]> {
    return this.aluguelAutomovelRepository.find();
  }

  async findById(id: number): Promise<AluguelAutomovel> {
    return this.aluguelAutomovelRepository.findOne({ where: { id } });
  }

  async create(aluguelAutomovel: AluguelAutomovel): Promise<AluguelAutomovel> {
    this.validate(aluguelAutomovel);
    return this.aluguelAutomovelRepository.save(aluguelAutomovel);
  }

  async update(aluguelAutomovel: AluguelAutomovel): Promise<AluguelAutomovel> {
    await this.findById(aluguelAutomovel.id);
    this.validate(aluguelAutomovel);
    return this.aluguelAutomovelRepository.save(aluguelAutomovel);
  }

  async remove(id: number): Promise<void> {
    await this.aluguelAutomovelRepository.delete(id);
  }

  validate(aluguelAutomovel: AluguelAutomovel) {
    const dataInicial = new Date(aluguelAutomovel.dataInicial);
    const dataEntrega = new Date(aluguelAutomovel.dataEntrega);

    if (dataEntrega <= dataInicial) {
      throw new BadRequestException("A data de entrega deve ser maior que a data inicial");
    }

    const dataAtual = new Date();
    if (dataInicial <= dataAtual) {
      throw new BadRequestException("A data inicial deve ser maior que a data atual");
    }

    if (aluguelAutomovel.cpf && aluguelAutomovel.cpf.length < 11) {
      throw new BadRequestException("CPF INVALIDO");
    }
  }
}
