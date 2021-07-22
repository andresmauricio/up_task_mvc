import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ status: 200 });
});

export default app;
