import {Router} from 'express';
import SubstationController from '../controllers/Substation.controller';

const router = Router();

router.get('/', SubstationController.getAll );

export default router;