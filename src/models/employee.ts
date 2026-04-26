import { Schema, model, Document } from 'mongoose';

export interface IEmployee extends Document {
    name: string;
    phone: string;
    email: string;
    role: string;
    experience: number;
}

const employeeSchema = new Schema<IEmployee>({
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String,  unique: true },
    role: { type: String },
    experience: { type: Number}
});
// הפרמטר השלישי הוא השם המדויק של ה-Collection במונגו
export const Employee = model<IEmployee>('Employee', employeeSchema, 'Miriam Reichenberg');
 