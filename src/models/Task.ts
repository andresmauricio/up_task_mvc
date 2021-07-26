import { BOOLEAN, STRING } from 'sequelize';
import db from '../database';
import Project from './Project';

const Task = db.define('tasks', {
  id: { type: STRING, primaryKey: true, allowNull: false, unique: true },
  name: { type: STRING(60), allowNull: false },
  state: { type: BOOLEAN, defaultValue: false }
});

Task.belongsTo(Project);
export default Task;
