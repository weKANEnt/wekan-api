const { admin } = require("../src/db/models/index");
require("dotenv").config();

const config = require("./env");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = function (passport) {
  const passportConfig = {
    secretOrKey: config.jwt_key,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    algoritms: ["HS256"],
    ignoreExpiration: false,
  };

  passport.use(
    new JwtStrategy(passportConfig, async function (payload, done) {
      try {
        const adminn = await admin.findOne({ where: { aid: payload.id } });
        if (adminn) {
          return done(null, adminn.id);
        }
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    })
  );
};
