import { AppDataSource } from "../../infrastructure/database/data-source";
import { Categoria } from "../entities/Categoria";
import { Conta } from "../entities/Conta";

export class ContaService {

    private contaRepository = AppDataSource.getRepository(Conta);
    private categoriaRepository = AppDataSource.getRepository(Categoria);
}