import { use } from 'passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import config from '../config/constanst';
import User from '../models/User';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret_jwt
};

export default new Strategy(options, async (payload, done) => {
  try {
    const user = await User.findAll({
      where: { id: payload.id, email: payload.email }
    });
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {}
});
