import { Injectable, HttpException } from '@nestjs/common';
import { CHEMICALS } from './chemicals.mock';

@Injectable()
export class ChemicalService {
    private chemicals = CHEMICALS;

    public getChemicals() {
        return this.chemicals;
    }

    public postChemical(chemical) {
        return this.chemicals.push(chemical);
    }

    public getChemicalById(id: number): Promise<any> {
        const chemicalId = Number(id);
        return new Promise((resolve) => {
            const chemical = this.chemicals.find(chemical => chemical.id === chemicalId);
            if (!chemical) {
                throw new HttpException('Not Found', 404);
            }
            return resolve(chemical);
        });
    }

    public deleteChemicalById(id: number): Promise<any> {
        const chemicalId = Number(id);
        return new Promise((resolve) => {
            const index = this.chemicals.findIndex(chemical => chemical.id === chemicalId);
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }
            this.chemicals.splice(index, 1);
            return resolve(this.chemicals);
        });       
    }

    public putChemicalById(id: number, propertyName: string, propertyValue: string): Promise<any> {
        const chemicalId = Number(id);
        return new Promise((resolve) => {
            const index = this.chemicals.findIndex(chemical => chemical.id === chemicalId);
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }
            this.chemicals[index][propertyName] = propertyValue;
            return resolve(this.chemicals);
        });
    }
}
