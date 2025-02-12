import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Pet, PetDocument } from "../schema/pet.schema";
import { Model } from "mongoose";
import { IPetEntity } from "../interfaces/IPetEntity";

@Injectable()
export class UpdatePetRepositorie {
    constructor(
        @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    ) {}

    async execute(id: string, petData: Partial<IPetEntity>): Promise<Pet> {
        const updatedPet = await this.petModel.findByIdAndUpdate(id, petData, {
            new: true,
            runValidators: true,
        }).exec();

        if (!updatedPet) {
            throw new NotFoundException(`Pet com ID ${id} não encontrado.`);
        }

        return updatedPet;
    }
}