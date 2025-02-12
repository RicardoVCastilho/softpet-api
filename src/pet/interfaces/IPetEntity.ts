import { PetSpecies } from "../schema/pet.schema";

export interface IPetEntity {
    petName: string;
    petSpecies: PetSpecies;
    petBreed: string;
    petBirth: Date;
    petOwner: string;
    ownerPhone: string;
}