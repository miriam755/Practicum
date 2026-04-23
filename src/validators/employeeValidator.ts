import { type Request, type Response, type NextFunction } from 'express';

export const validateEmployee = (req: Request, res: Response, next: NextFunction) => {
    const { name, phone, email, role, experience } = req.body;

    if (!name || !phone || !email || !role || experience === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (typeof experience !== 'number') {
        return res.status(400).json({ error: 'Experience must be a number' });
    }

    next(); // הכל תקין, עוברים לשלב הבא
};