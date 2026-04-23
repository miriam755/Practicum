import { type Request, type Response, type NextFunction } from 'express';import { employeeService } from '../services/employeeService';

export const getEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        next(error); // שולח למידלוור של השגיאות
    }
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    console.log("כניסה לפונקציית יצירת עובד. הנתונים שהתקבלו:", req.body);
    try {
        const newEmployee = await employeeService.createEmployee(req.body);
        res.status(201).json(newEmployee);
    } catch (error) {
        next(error);
    }
};