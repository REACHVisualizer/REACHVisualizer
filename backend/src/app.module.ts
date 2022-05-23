import { Module } from '@nestjs/common';
import { ChemicalModule } from './chemical/chemical.module';
import { MongooseModule } from '@nestjs/mongoose'; 

var connectionString = process.env.MONGODB_CONNECTION_CHEMICAL

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost/reach_visualizer'),
    MongooseModule.forRoot(connectionString),
    ChemicalModule
  ],
})
export class AppModule {}
