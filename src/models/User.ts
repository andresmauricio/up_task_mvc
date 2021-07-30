import { BOOLEAN, STRING } from 'sequelize';
import db from '../database';
import Project from './Project';
import Role from './Role';

const User = db.define('users', {
  id: { type: STRING, primaryKey: true, allowNull: false, unique: true },
  email: { type: STRING(60), allowNull: false, unique: true },
  password: { type: STRING(60), allowNull: false, unique: true },
  is_active: { type: BOOLEAN, defaultValue: false }
});

User.belongsTo(Role);
User.hasMany(Project);
export default User;
