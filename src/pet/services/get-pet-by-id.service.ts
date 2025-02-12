import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { GetPetByIdRepositorie } from "../repositories/get-pet-by-id.repositories";

@Injectable()
export class GetPetByIdService {
    constructor(
        private readonly getPetByIdRepositorie: GetPetByIdRepositorie,
    ){}

    async execute(id: string): Promise<any> {
        try {
            const pet = await this.getPetByIdRepositorie.execute(id);

            return {
                statusCode: HttpStatus.OK,
                message: "Pet encontrado com sucesso",
                data: pet,
            };
        } catch (error) {
            throw new HttpException(
                {
                    statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
                    message: error.message || "Erro ao buscar o pet",
                },
                error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}