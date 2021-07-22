import { Sequelize } from 'sequelize';
import config from './config/constanst';

const db = new Sequelize(config.db_name, config.db_user, config.db_password, {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
