import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChemicalController } from './chemical.controller';
import { ChemicalService } from './chemical.service';
import { ChemicalSchema} from './schemas/chemical.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Chemical',
        schema: ChemicalSchema,
      },
    ]),
  ],
  controllers: [ChemicalController],
  providers: [ChemicalService]
})
export class ChemicalModule {}
