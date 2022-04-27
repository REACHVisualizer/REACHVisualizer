import * as mongoose from 'mongoose';

export const ChemicalSchema = new mongoose.Schema({
    id: Number,
    substance_name: String,
    ec_number: String,
    cas_number: String,
});