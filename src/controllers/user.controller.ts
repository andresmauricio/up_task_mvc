// listar usuarios;
// crear usuarios;
// eliminar usuarios;
// actulizar usuarios;

import { Request, Response } from 'express';
import Role from '../models/Role';
import User from '../models/User';
import {} from '../';
import { success } from '../helpers/response';

export const list = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: { model: Role },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'roleId'] }
    });
    success(req, res, 200, users);
  } catch (error) {}
};
