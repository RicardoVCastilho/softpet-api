import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PetModule, MongooseModule.forRoot('mongodb+srv://ricardo08:82u9x1X8zZ4bQxIz@softpet-api.p5trj.mongodb.net/?retryWrites=true&w=majority&appName=softpet-api')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}