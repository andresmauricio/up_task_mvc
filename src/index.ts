import dotenv from 'dotenv';
dotenv.config();
import app from './server';
import config from './config/constanst';

async function main() {
  await app.listen(config.port);
}

main().then(() => console.log('server running'));
