import { Request, Response } from 'express';
import Project from '../models/Project';
import { v4 as uuidv4 } from 'uuid';
import slug from 'slug';
import { success } from '../helpers/response';

export const list = async (req: Request, res: Response) => {
  const { id } = req.params;
  const projects = await Project.findAll({
    where: { userId: id }
  });
  success(req, res, 201, projects);
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
  const project = await Project.create(newproject);
  success(req, res, 201, project);
};