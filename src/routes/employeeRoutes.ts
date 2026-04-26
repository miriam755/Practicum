import { Router } from 'express';
import * as employeeController from '../controllers/employeeController.js';
import { validateEmployee } from '../validators/employeeValidator.js';

const router = Router();

router.get('/', employeeController.getEmployees);
router.post('/', validateEmployee, employeeController.createEmployee);



export default router;