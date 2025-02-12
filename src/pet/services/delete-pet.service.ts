import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeletePetRepository } from "../repositories/delete-pet-repositorie";

@Injectable()
export class DeletePetService {
    constructor(
        private readonly deletePetRepository: DeletePetRepository
    ) {}

    async execute(id: string): Promise<any> {
        try {
            return await this.deletePetRepository.execute(id);
        } catch (error) {
            throw new HttpException(
                {
                    statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
                    message: error.message || "Erro ao deletar o pet.",
                },
                error.status || HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}