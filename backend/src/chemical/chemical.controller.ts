import { Controller, Get } from '@nestjs/common';
import { ChemicalService} from './chemical.service';

@Controller('chemical')
export class ChemicalController {
    constructor(private chemicalService: ChemicalService) {}

    @Get()
    async getChemicals() {
        return this.chemicalService.getChemicals();
    }
}
