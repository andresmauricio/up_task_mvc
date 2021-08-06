import { Router } from 'express';
import * as projects from '../controllers/project.controller';

const router = Router();

router.get('/list/:id', projects.list);
router.post('/create', projects.create);


export default router;
