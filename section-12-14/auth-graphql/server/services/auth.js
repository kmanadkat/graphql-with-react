
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err, null))
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() })
    .exec()
    .then(user => {
      if (!user)
        return done(null, false, 'Invalid Credentials')

      user.comparePassword(password, (err, isMatch) => {
        if (err)
          return done(err)

        if (isMatch)
          return done(null, user)

        return done(null, false, 'Invalid Credentials.')
      })
    })
    .catch(err => {
      if (err)
        return done(err);
    })
}))


function signup({ email, password, req }) {
  if (!email || !password)
    throw new Error('You must provide an email and password.');

  const emailLowerCase = email.toLowerCase()
  const user = new User({ email: emailLowerCase, password });

  return User.findOne({ email: emailLowerCase })
    .then(existingUser => {
      if (existingUser) { throw new Error('Email in use'); }
      return user.save();
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.logIn(user, (err) => {
          if (err) { reject(err); }
          resolve(user);
        });
      });
    });
}

function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user)
        reject('Invalid credentials.')

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

module.exports = { signup, login };
