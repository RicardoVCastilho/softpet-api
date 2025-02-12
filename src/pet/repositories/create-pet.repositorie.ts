import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Pet, PetDocument } from "../schema/pet.schema";
import { Model } from "mongoose";
import { IPetEntity } from "../interfaces/IPetEntity";

@Injectable()
export class CreatePetRepositorie {
    constructor(
        @InjectModel(Pet.name) private eventModel: Model<PetDocument>,
    ){}

    async execute(event: IPetEntity): Promise<IPetEntity>{
        const createdPet = new this.eventModel(event);
        await createdPet.save();
        return createdPet.toObject();
    }
}