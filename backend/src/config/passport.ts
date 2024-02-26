// src/config/passport.ts

import { Strategy, ExtractJwt, StrategyOptions, JwtFromRequestFunction } from "passport-jwt";
import { PassportStatic } from "passport";
import { User } from "../model"; // Assuming you have a User model

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "", // Ensure that JWT_SECRET is set in your environment
};

export const authenticate = (passport: PassportStatic) => {
  passport.use(
    new Strategy(options, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);

        if (user) {
          return done(null, user?._id);
        }

        return done(null, false);
      } catch (err) {
        console.error(err);
        return done(err, false);
      }
    })
  );
};
