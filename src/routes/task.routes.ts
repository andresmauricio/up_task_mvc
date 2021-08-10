import { Router } from 'express';
import * as tasks from '../controllers/task.controller';

const router = Router();

router.get('/list/:id_project', tasks.list);
router.post('/create', tasks.create);
router.put('/update', tasks.update);


export default router;
