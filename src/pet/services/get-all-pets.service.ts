import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { GetAllPetsRepositorie } from "../repositories/get-all-pets.repositorie";
import { Pet } from "../schema/pet.schema";

@Injectable()
export class GetAllPetsService {
    constructor(
        private readonly getAllPetsRepositorie: GetAllPetsRepositorie,
    ) {}

    // Agora aceitamos os parâmetros 'page' e 'limit' para aplicar a paginação
    async execute(page: number = 1, limit: number = 8): Promise<any> {
        try {
            // Calculando o índice de onde começar a busca no banco de dados
            const offset = (page - 1) * limit;
            
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
                meta: {
                    page,
                    limit,
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
