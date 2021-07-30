import { Request, Response } from 'express';
import Role from '../models/Role';
import User from '../models/User';
import { errorResponse, success } from '../helpers/response';
import jwt from 'jsonwebtoken';
import config from '../config/constanst';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: any = await User.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    });
    const verifyPass = user.comparePassword(password);
    if (verifyPass) {
      const data = { id: user.id, email, role: user.role };
      const token = jwt.sign({ ...data }, config.secret_jwt);
      return success(req, res, 200, { ...data, token });
    }
    return errorResponse(req, res, 401, null);
  } catch (error) {
    errorResponse(req, res, 401, null);
  }
};
