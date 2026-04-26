import express from 'express';
import cors from 'cors'; // 1. ייבוא החבילה
import employeeRoutes from './routes/employeeRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Error Middleware (חייב לבוא אחרי ה-Routes)
app.use(errorHandler);

export default app;


