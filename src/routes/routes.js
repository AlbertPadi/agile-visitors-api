import express from 'express';
import userRoutes from '../routes/User';
import VisitRoutes from '../routes/Visit';
import SubstationRoutes from '../routes/Substation';

// Initialization
let router = express.Router();

// Routes
router.use('/users', userRoutes);
router.use('/visits', VisitRoutes);
router.use('/substations', SubstationRoutes);

export default router;