import { DataTypes } from 'sequelize';
import db from '../database';

const Role = db.define('roles', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(60), allowNull: false }
});

export default Role;
