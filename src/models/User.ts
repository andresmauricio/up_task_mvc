import { BOOLEAN, BuildOptions, Model, STRING } from 'sequelize';
import db from '../database';
import Project from './Project';
import Role from './Role';
import bcrypt from 'bcrypt';

const User = db.define(
  'users',
  {
    id: { type: STRING, primaryKey: true, allowNull: false, unique: true },
    email: { type: STRING(60), allowNull: false, unique: true },
    password: { type: STRING(60), allowNull: false },
    is_active: { type: BOOLEAN, defaultValue: false }
  },
  {
    hooks: {
      beforeCreate(user) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user['password'], salt);
        user['password'] = hash;
      }
    }
  }
);

User.belongsTo(Role);
User.hasMany(Project);
export default User;
