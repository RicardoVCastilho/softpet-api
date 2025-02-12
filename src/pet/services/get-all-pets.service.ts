import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { GetAllPetsRepositorie } from "../repositories/get-all-pets.repositorie";
import { Pet } from "../schema/pet.schema";

@Injectable()
export class GetAllPetsService {
    constructor(
        private readonly getAllPetsRepositorie: GetAllPetsRepositorie,
    ) {}

    async execute(): Promise<any> {
        try {
            const pets = await this.getAllPetsRepositorie.execute();
            
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
            };
        } catch (error) {
            throw new HttpException(
                { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Erro ao buscar pets', error: error.message },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
