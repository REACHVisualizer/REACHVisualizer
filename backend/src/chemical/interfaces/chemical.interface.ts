import { Document } from 'mongoose';

export interface IChemical extends Document {
    readonly id: number;
    readonly substance_name: string;
    readonly ec_number: string;
    readonly cas_number: string;
}