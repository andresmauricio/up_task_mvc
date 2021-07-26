import { BOOLEAN, STRING } from 'sequelize';
import db from '../database';
import Project from './Project';

const User = db.define('users', {
  id: { type: STRING, primaryKey: true, allowNull: false, unique: true },
  email: { type: STRING(60), allowNull: false, unique: true },
  password: { type: STRING(60), allowNull: false, unique: true },
  is_active: { type: BOOLEAN, defaultValue: false }
});

User.hasMany(Project);
export default User;
