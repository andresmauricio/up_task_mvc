// listar usuarios;
// crear usuarios;
// eliminar usuarios;
// actulizar usuarios;

import { Request, Response } from 'express';
import Role from '../models/Role';
import User from '../models/User';

export const list = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: { model: Role },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'roleId'] },
    });
    res.json({ users });
  } catch (error) {}
};
