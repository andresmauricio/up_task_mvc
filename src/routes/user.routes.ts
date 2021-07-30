import { Router } from 'express';
import * as user from '../controllers/user.controller';

const router = Router();

router.get('/', user.list);
router.post('/', user.create);

export default router;
