import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Marca } from "./marca.entity";

@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>
  ) {}

  async findAll(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }

  async findById(id: number): Promise<Marca> {
    return this.marcaRepository.findOne({ where: { id: id } });
  }

  async create(marca: Marca): Promise<Marca> {
    this.validate(marca);
    return this.marcaRepository.save(marca);
  }

  async update(marca: Marca): Promise<Marca> {
    await this.findById(marca.id);
    this.validate(marca);
    return this.marcaRepository.save(marca);
  }

  async remove(id: number): Promise<void> {
    await this.marcaRepository.delete(id);
  }

  validate(marca: Marca) {
    const dataCriacao = new Date(marca.dataCriacao);
    const dataAtual = new Date();

    if (dataCriacao > dataAtual) {
      throw new BadRequestException("A data de criação não pode ser maior que a data atual");
    }
  }
}
