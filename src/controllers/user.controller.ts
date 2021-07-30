// listar usuarios;
// crear usuarios;
// eliminar usuarios;
// actulizar usuarios;

import { Request, Response } from 'express';
import Role from '../models/Role';
import User from '../models/User';
import { errorResponse, success } from '../helpers/response';
import { v4 as uuidv4 } from 'uuid';
import { RolesCodes } from '../schemas/types';

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
  try {
    const user = await User.create({
      email,
      password,
      id,
      is_active,
      roleId: RolesCodes.USER
    });
    if (user) success(req, res, 201, user);
  } catch (error) {
    console.error({ error });
    showErrorsDatabase(req, res, error);
  }
};

const showErrorsDatabase = (req, res, error) => {
  const errors: [] = error?.errors;
  if (error && Array.isArray(errors) && errors.length) {
    const data = errors.map((e: any) => ({
      message: e.message,
      field: e.path,
      type: e.type
    }));
    errorResponse(req, res, 400, data);
  } else {
    errorResponse(req, res, 500, error);
  }
};
