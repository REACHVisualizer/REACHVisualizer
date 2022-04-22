import { Module } from '@nestjs/common';
import { ChemicalController } from './chemical.controller';
import { ChemicalService } from './chemical.service';

@Module({
  controllers: [ChemicalController],
  providers: [ChemicalService]
})
export class ChemicalModule {}
