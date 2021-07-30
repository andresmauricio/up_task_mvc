import { Router } from 'express';
import * as user from '../controllers/user.controller';

const router = Router();

router.get('/', user.list);

export default router;
