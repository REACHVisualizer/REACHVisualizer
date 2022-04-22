import { Test, TestingModule } from '@nestjs/testing';
import { ChemicalService } from './chemical.service';

describe('ChemicalService', () => {
  let service: ChemicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChemicalService],
    }).compile();

    service = module.get<ChemicalService>(ChemicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
