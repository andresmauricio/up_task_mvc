import { Request } from 'express';
import { errorResponse } from '../helpers/response';
import { RolesCodes } from '../schemas/types';

export const isSuperAdmin = (req, res, next) => {
  const role = req?.user[0]?.dataValues?.roleId || 2;
  if (role === RolesCodes.SUPERUSER) return next();
  return errorResponse(req, res, 403, null);
};
