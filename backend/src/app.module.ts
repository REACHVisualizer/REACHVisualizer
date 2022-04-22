import { Module } from '@nestjs/common';
import { ChemicalModule } from './chemical/chemical.module';

@Module({
  imports: [ChemicalModule],
})
export class AppModule {}
