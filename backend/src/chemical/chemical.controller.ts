import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ChemicalService} from './chemical.service';
import { ChemicalDto } from './chemical.dto';

@Controller('chemical')
export class ChemicalController {
    constructor(private chemicalService: ChemicalService) {}

    @Get()
    public getChemicals() {
        return this.chemicalService.getChemicals();
    }

    @Post()
    public postChemical(@Body() chemical: ChemicalDto) {
        return this.chemicalService.postChemical(chemical);
    }

    @Get(':id')
    public async getChemicalById(@Param('id') id: number) {
        return this.chemicalService.getChemicalById(id);
    }

    @Delete(':id')
    public async deleteChemicalById(@Param('id') id: number) {
        return this.chemicalService.deleteChemicalById(id);
    }

    @Put(':id')
    public async putChemicalById(@Param('id') id: number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.chemicalService.putChemicalById(id, propertyName, propertyValue);
    }

}
