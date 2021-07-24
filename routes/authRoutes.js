const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require('../models/user')

//passport authentication 
router.get(
    "/google/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      req.session.save(() => {
        req.session.password = req.user.id;
        req.session.name = req.user.name;
        req.session.email = req.user.email;
        req.session.logged_in = true;
        res.redirect('/search');
      });
    }
  );
  
  passport.use(
    new GoogleStrategy(
      {
        // options for google strategy
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://podshack.herokuapp.com/auth/google/redirect",
      },
      (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log("profile", profile);
        User.create(
          {
            email: profile.emails[0].value,
            name: profile.displayName,
            password: "Test1",
          }
        ).then((res) => {
          done(null, res);
        })
      }
    )
  );
  module.exports = router;