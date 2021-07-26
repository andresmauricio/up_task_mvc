import { BOOLEAN, STRING } from 'sequelize';
import db from '../database';

const Project = db.define('projects', {
  id: { type: STRING, primaryKey: true, allowNull: false, unique: true },
  name: { type: STRING(60), allowNull: false},
  url: { type: STRING(60), allowNull: false, unique: true },
  is_finish: { type: BOOLEAN, defaultValue: false }
});

export default Project;
