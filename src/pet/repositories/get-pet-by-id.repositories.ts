import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pet, PetDocument } from "../schema/pet.schema";

@Injectable()
export class GetPetByIdRepositorie {
    constructor(
        @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    ){}

    async execute(id: string):Promise<Pet> {
        const pet = await this.petModel.findById(id).exec();
        if (!pet) {
            throw new NotFoundException(`O Pet com o ID ${id} não foi encontrado.`);
        }
        return pet;
    }
}