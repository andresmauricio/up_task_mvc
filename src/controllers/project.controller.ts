import { Request, Response } from 'express';
import Project from '../models/Project';

export const list = async (req: Request, res: Response) => {
  const { id } = req.params;
  const projects = await Project.findAll({
    where: { userId: id }
  });
  res.json({ projects });
};
