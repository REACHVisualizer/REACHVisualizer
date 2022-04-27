import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IChemical } from './interfaces/chemical.interface';
import { ChemicalDto } from './chemical.dto';

const chemicalProjection = {
    __v: false,
    _id: false,
}

@Injectable()
export class ChemicalService {

    constructor (@InjectModel('Chemical') private readonly chemicalModel: Model<IChemical>) {}

    public async getChemicals(): Promise<ChemicalDto[]> {
        const chemicals = await this.chemicalModel.find({}, chemicalProjection).exec();
        if (!chemicals || !chemicals[0]) {
            throw new HttpException('Not Found', 404);
        }
        return chemicals;
    }

    public async postChemical(newChemical: ChemicalDto) {
        const chemical = await new this.chemicalModel(newChemical);
        return chemical.save();
    }

    public async getChemicalById(id: number): Promise<ChemicalDto> {
        const chemical = await this.chemicalModel.findOne({ id }, chemicalProjection).exec();
        if (!chemical){
            throw new HttpException('Not Found', 404);
        }
        return chemical;
    }

    public async deleteChemicalById(id: number): Promise<ChemicalDto> {
        const chemical = await this.chemicalModel.findOneAndDelete({ id }).exec();
        if (!chemical) {
            throw new HttpException('Not Found', 404);
        }
        return chemical;   
    }

    public async putChemicalById(id: number, propertyName: string, propertyValue: string): Promise<ChemicalDto> {
        const chemical = await this.chemicalModel.findOneAndUpdate({ id },{[propertyName]: propertyValue},).exec();
        if (!chemical){
            throw new HttpException('Not Found', 404);
        }
        return chemical;
    }
}
