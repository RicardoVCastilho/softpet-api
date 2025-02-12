import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pet, PetDocument } from "../schema/pet.schema";

@Injectable()
export class DeletePetRepository {
    constructor(
        @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    ){}

    async execute(id: string): Promise<{ message: string }> {
        const pet = await this.petModel.findByIdAndDelete(id);

        if(!pet) {
            throw new NotFoundException("O Pet não foi encontrado.");
        }

        return { message: "O Pet foi deletado com sucesso!"};
    }
}