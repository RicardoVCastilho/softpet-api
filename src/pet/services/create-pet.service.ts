import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { CreatePetRepositorie } from "../repositories/create-pet.repositorie";
import { IPetEntity } from "../interfaces/IPetEntity";

@Injectable()
export class CreatePetService {
    constructor(
        private readonly createPetRepositorie: CreatePetRepositorie
    ) { }

    async execute(event: IPetEntity): Promise<any> {
        try {
            const newPet = await this.createPetRepositorie.execute(event);

            return {
                statusCode: HttpStatus.CREATED,
                message: 'Pet criado com sucesso!',
                data: newPet,
            };
        } catch (error) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Erro ao criar o pet',
                    error: error.message,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}