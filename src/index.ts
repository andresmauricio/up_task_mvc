import dotenv from 'dotenv';
dotenv.config();
import app from './server';
import config from './config/constanst';
import db from "./database";

async function main() {
  await db.sync();
  await app.listen(config.port);
}

main().then(() => console.log('server running'));
