import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import users from './routes/user.routes';
import morgan from 'morgan';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ status: 200 });
});

app.use('/api/users', users);

export default app;
