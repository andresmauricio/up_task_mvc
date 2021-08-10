import { Request, Response } from 'express';
import Task from '../models/Task';
import { v4 as uuidv4 } from 'uuid';
import { errorResponse, success } from '../helpers/response';

export const list = async (req: Request, res: Response) => {
  const { id_project } = req.params;
  try {
    const tasks = await Task.findAll({
      where: { projectId: id_project }
    });
    success(req, res, 201, tasks);
  } catch (error) {
    errorResponse(req, res, 404, null);
  }
};

export const create = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { name, projectId } = req.body;
  const newtask = {
    id,
    name,
    projectId
  };
  try {
    const task = await Task.create(newtask);
    success(req, res, 201, task);
  } catch (error) {
    errorResponse(req, res, 404, null);
  }
};
