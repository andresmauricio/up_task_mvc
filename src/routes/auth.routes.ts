import { Router } from 'express';
import * as user from '../controllers/auth.controller';

const router = Router();

router.post('/login', user.login);


export default router;
