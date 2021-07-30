// listar usuarios;
// crear usuarios;
// eliminar usuarios;
// actulizar usuarios;

import { Request, Response } from 'express';
import Role from '../models/Role';
import User from '../models/User';
import { success } from '../helpers/response';
import { v4 as uuidv4 } from 'uuid';

export const list = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: { model: Role },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'roleId'] }
    });
    success(req, res, 200, users);
  } catch (error) {}
};

export const create = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const id = uuidv4();
  const is_active = false;
  console.log({ email, id, is_active, password, roleId: 1 });

  try {
    const user = await User.create({ email, password, id, is_active });
    if (user) success(req, res, 201, user);
  } catch (error) {
    console.error({error});
    
  }
};
