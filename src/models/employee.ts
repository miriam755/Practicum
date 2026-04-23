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
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    experience: { type: Number, required: true }
});
// הפרמטר השלישי הוא השם המדויק של ה-Collection במונגו
export const Employee = model<IEmployee>('Employee', employeeSchema, 'Miriam Reichenberg');
 