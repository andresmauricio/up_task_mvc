import { Request, Response } from 'express';
import Task from '../models/Task';
import { v4 as uuidv4 } from 'uuid';
import { errorResponse, success } from '../helpers/response';
import Project from '../models/Project';

export const list = async (req: Request, res: Response) => {
  const { id_project } = req.params;
  try {
    const tasks = await Task.findAll({
      where: { projectId: id_project },
      include: { model: Project }
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

export const update = async (req: Request, res: Response) => {
  const { name, state, id } = req.body;
  try {
    const task: any = await Task.findOne({ where: { id } });
    task.name = name;
    task.state = state ? true : false;
    const taskUpdated = await task.save();
    success(req, res, 200, taskUpdated);
  } catch (error) {
    errorResponse(req, res, 404, null);
  }
};
