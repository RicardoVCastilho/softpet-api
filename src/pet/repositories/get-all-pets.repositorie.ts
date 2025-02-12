import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Pet, PetDocument } from "../schema/pet.schema";
import { Model } from "mongoose";


@Injectable()
export class GetAllPetsRepositorie {
    constructor(
        @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    ){}

    async execute(): Promise<Pet[]> {
        return this.petModel.find().exec();
    }
}