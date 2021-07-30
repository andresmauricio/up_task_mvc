import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import users from './routes/user.routes';
import auth from './routes/auth.routes';
import morgan from 'morgan';
import passport from 'passport';
import passportMiddleware from './middleware/passport';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(passportMiddleware);

app.get('/', (req, res) => {
  res.json({ status: 200 });
});

app.use('/api/users', users);
app.use('/api/auth', auth);

export default app;
