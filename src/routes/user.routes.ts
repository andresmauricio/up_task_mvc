import { Router } from 'express';
import passport from 'passport';
import * as user from '../controllers/user.controller';
import { isSuperAdmin } from '../middleware/roles';
import { body, check } from 'express-validator';
import { errorValidations } from '../helpers/response';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), user.list);
router.post(
  '/',
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
  errorValidations,
  user.create
);
router.delete(
  '/:id',
  [passport.authenticate('jwt', { session: false }), isSuperAdmin],
  user.remove
);

export default router;
