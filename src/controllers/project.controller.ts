import { Request, Response } from 'express';
import Project from '../models/Project';
import { v4 as uuidv4 } from 'uuid';
import slug from 'slug';
import { errorResponse, success } from '../helpers/response';

export const list = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const projects = await Project.findAll({
      where: { userId: id }
    });
    success(req, res, 201, projects);
  } catch (error) {
    errorResponse(req, res, 404, null);
  }
};

export const create = async (req: Request, res: Response) => {
  const id = uuidv4();
  const { name, userId } = req.body;
  const url = slug(`${name}-${id}`);
  const newproject = {
    id,
    name,
    url,
    userId,
    is_finish: false
  };
  try {
    const project = await Project.create(newproject);
    success(req, res, 201, project);
  } catch (error) {
    errorResponse(req, res, 404, null);
  }
};

export const update = async (req: Request, res: Response) => {
  const { name, is_finish, id } = req.body;
  try {
    const project: any = await Project.findOne({ where: { id } });
    project.name = name;
    project.is_finish = is_finish ? true : false;
    const projectUpdated = await project.save();
    success(req, res, 200, projectUpdated);
  } catch (error) {
    errorResponse(req, res, 404, null);
  }
};
