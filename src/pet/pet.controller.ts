import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CreatePetService } from './services/create-pet.service';
import { GetAllPetsService } from './services/get-all-pets.service';
import { GetPetByIdService } from './services/get-pet-by-id.service';
import { UpdatePetService } from './services/update-pet.service';
import { DeletePetService } from './services/delete-pet.service';
import { IPetEntity } from './interfaces/IPetEntity';


//Descrição das rotas
@Controller('pet')
export class PetController {
    constructor (
        private readonly createPetService: CreatePetService,
        private readonly getAllPetsService: GetAllPetsService,
        private readonly getPetByIdService: GetPetByIdService,
        private readonly updatePetService: UpdatePetService,
        private readonly deletePetService: DeletePetService,
    ){}

    //localhost:3000/pet/create
    @Post('create')
    async create(@Body() event: IPetEntity): Promise<IPetEntity> { 
        return this.createPetService.execute(event);
    }

    //localhost:3000/pet/all-pets

    @Get('all-pets')
    async getAllPets() {
        return await this.getAllPetsService.execute();
    }

    //localhost:3000/pet/:id
    @Get(':id')
    async getPetById(@Param('id') id: string) {
        return await this.getPetByIdService.execute(id);
    }

    //localhost:3000/pet/:id
    @Put(':id')
    async updatePet(@Param('id') id: string, @Body() petData: Partial<IPetEntity>) {
        return await this.updatePetService.execute(id, petData);
    }

    //localhost:3000/pet/:id
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.deletePetService.execute(id);
    }
}
