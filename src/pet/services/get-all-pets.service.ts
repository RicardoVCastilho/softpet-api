import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { GetAllPetsRepositorie } from "../repositories/get-all-pets.repositorie";
import { Pet } from "../schema/pet.schema";

@Injectable()
export class GetAllPetsService {
  constructor(
    private readonly getAllPetsRepositorie: GetAllPetsRepositorie,
  ) {}

  // Agora aceitamos os parâmetros 'page' e 'limit' para aplicar a paginação
  async execute(page: number = 1, limit: number = 6): Promise<any> {
    try {
      // Garantindo que a página seja um número válido e positivo
      page = Math.max(page, 1);

      // Calculando o índice de onde começar a busca no banco de dados
      const offset = (page - 1) * limit;
      
      // Contando o total de pets no banco
      const totalPets = await this.getAllPetsRepositorie.countPets();

      // Calculando o total de páginas
      const totalPages = Math.ceil(totalPets / limit);

      // Se a página solicitada for maior que o total de páginas, retorna a última página
      if (page > totalPages) {
        page = totalPages;
      }

      // Fazendo a consulta paginada
      const pets = await this.getAllPetsRepositorie.executePaginated(offset, limit);
      
      if (pets.length === 0) {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, message: 'Nenhum pet encontrado.' },
          HttpStatus.NOT_FOUND
        );
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Pets encontrados com sucesso!',
        data: pets,
        pagination: {
          currentPage: page,
          totalPages: totalPages,
          totalPets: totalPets,
        },
      };
    } catch (error) {
      throw new HttpException(
        { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Erro ao buscar pets', error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
