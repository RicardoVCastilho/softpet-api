import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export enum PetSpecies {
    Cachorro = 'cachorro',
    Gato = 'gato',
}

export type PetDocument = HydratedDocument<Pet>;

@Schema()
export class Pet extends Document {
   @Prop({required: true})
   petName: string;

   @Prop({required: true})
   petSpecies: PetSpecies;

   @Prop({required: true})
   petBreed: string;

   @Prop({required: true})
   petBirth: Date;

   @Prop({required: true})
   petOwner: string;

   @Prop({required: true})
   ownerPhone: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);