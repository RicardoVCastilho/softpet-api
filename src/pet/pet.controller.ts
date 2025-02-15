import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreatePetService } from './services/create-pet.service';
import { GetAllPetsService } from './services/get-all-pets.service';
import { GetPetByIdService } from './services/get-pet-by-id.service';
import { UpdatePetService } from './services/update-pet.service';
import { DeletePetService } from './services/delete-pet.service';
import { IPetEntity } from './interfaces/IPetEntity';

@Controller('pet')
export class PetController {
    constructor (
        private readonly createPetService: CreatePetService,
        private readonly getAllPetsService: GetAllPetsService,
        private readonly getPetByIdService: GetPetByIdService,
        private readonly updatePetService: UpdatePetService,
        private readonly deletePetService: DeletePetService,
    ){ }

    @Post('create')
    async create(@Body() event: IPetEntity): Promise<IPetEntity> { 
        return this.createPetService.execute(event);
    }

    // Alteração aqui: agora aceitamos 'page' e 'limit' como parâmetros de query
    @Get('all-pets')
    async getAllPets(@Query('page') page: number = 1, @Query('limit') limit: number = 8) {
        return await this.getAllPetsService.execute(page, limit);
    }

    @Get(':id')
    async getPetById(@Param('id') id: string) {
        return await this.getPetByIdService.execute(id);
    }

    @Put(':id')
    async updatePet(@Param('id') id: string, @Body() petData: Partial<IPetEntity>) {
        return await this.updatePetService.execute(id, petData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.deletePetService.execute(id);
    }
}
