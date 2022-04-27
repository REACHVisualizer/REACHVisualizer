import { Module } from '@nestjs/common';
import { ChemicalModule } from './chemical/chemical.module';
import { MongooseModule } from '@nestjs/mongoose'; 

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/reach_visualizer'),
    ChemicalModule
  ],
})
export class AppModule {}
