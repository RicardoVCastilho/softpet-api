import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './schema/pet.schema';
import { PetController } from './pet.controller';
import { CreatePetService } from './services/create-pet.service';
import { GetAllPetsService } from './services/get-all-pets.service';
import { GetPetByIdService } from './services/get-pet-by-id.service';
import { UpdatePetService } from './services/update-pet.service';
import { DeletePetService } from './services/delete-pet.service';
import { CreatePetRepositorie } from './repositories/create-pet.repositorie';
import { GetAllPetsRepositorie } from './repositories/get-all-pets.repositorie';
import { GetPetByIdRepositorie } from './repositories/get-pet-by-id.repositories';
import { UpdatePetRepositorie } from './repositories/update-pet.repositorie';
import { DeletePetRepository } from './repositories/delete-pet-repositorie';

@Module({
    imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
    controllers: [PetController],
    providers: [
        CreatePetService,
        GetAllPetsService,
        GetPetByIdService,
        UpdatePetService,
        DeletePetService,
        CreatePetRepositorie,
        GetAllPetsRepositorie,
        GetPetByIdRepositorie,
        UpdatePetRepositorie,
        DeletePetRepository,
    ],
})
export class PetModule {}
