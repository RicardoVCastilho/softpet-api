import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UpdatePetRepositorie } from "../repositories/update-pet.repositorie";
import { Pet } from "../schema/pet.schema";
import { IPetEntity } from "../interfaces/IPetEntity";

@Injectable()
export class UpdatePetService {
    constructor(
        private readonly updatePetRepositorie: UpdatePetRepositorie,
    ) { }

    async execute(id: string, petData: Partial<IPetEntity>): Promise<any> {
        try {
            const updatePet = await this.updatePetRepositorie.execute(id, petData);

            return {
                statusCode: HttpStatus.OK,
                message: "O Pet foi atualizado com sucesso!",
                data: updatePet,
            };
        } catch (error) {
            throw new HttpException({
                statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message || "Erro ao atualizar o pet",
            },
                error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}