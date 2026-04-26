import { Employee, type IEmployee } from '../models/employee.js';
export const employeeService = {
    async getAllEmployees(): Promise<IEmployee[]> {
        return await Employee.find();
    },

    async createEmployee(data: Partial<IEmployee>): Promise<IEmployee> {
        const existing = await Employee.findOne({ email: data.email });
        if (existing) throw new Error('Employee email already exists');
        
        return await Employee.create(data);
    }
};