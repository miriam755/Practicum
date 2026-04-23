import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Error Middleware (חייב לבוא אחרי ה-Routes)
app.use(errorHandler);

export default app;


