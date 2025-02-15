import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Pet, PetDocument } from "../schema/pet.schema";
import { Model } from "mongoose";

@Injectable()
export class GetAllPetsRepositorie {
    constructor(
        @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    ) {}

    // Agora aceitamos 'offset' e 'limit' como parâmetros para paginar os resultados
    async executePaginated(offset: number, limit: number): Promise<Pet[]> {
        return this.petModel.find()
            .skip(offset)  // Pular os primeiros 'offset' registros
            .limit(limit)  // Limitar o número de registros a 'limit'
            .exec();
    }

    // Para obter o total de pets, o que pode ser útil para exibir a contagem de páginas
    async countPets(): Promise<number> {
        return this.petModel.countDocuments(); // ou equivalente no seu banco de dados
      }
}
