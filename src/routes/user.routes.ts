import { Router } from 'express';
import passport from 'passport';
import * as user from '../controllers/user.controller';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), user.list);
router.post('/', user.create);
router.delete('/:id',passport.authenticate('jwt', { session: false }), user.remove);

export default router;
