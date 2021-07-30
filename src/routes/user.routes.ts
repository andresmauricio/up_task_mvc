import { Router } from 'express';
import * as user from '../controllers/user.controller';

const router = Router();

router.get('/', user.list);
router.post('/', user.create);
router.delete('/:id', user.remove);

export default router;
