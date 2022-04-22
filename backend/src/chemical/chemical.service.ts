import { Injectable } from '@nestjs/common';
import { CHEMICALS } from './chemicals.mock';

@Injectable()
export class ChemicalService {
    private chemicals = CHEMICALS;

    public async getChemicals() {
        return this.chemicals;
    }
}
