import { Router } from 'express';
import * as employeeController from '../controllers/employeeController';
import { validateEmployee } from '../validators/employeeValidator';

const router = Router();

router.get('/', employeeController.getEmployees);
router.post('/', validateEmployee, employeeController.createEmployee);



export default router;