import app from './server';

async function main() {
  await app.listen(3000);
}

main().then(() => console.log('server running'));
