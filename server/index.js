const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const keys = require('./config/keys');


// console.developers.google.com
// 673010192603-1rftifhtfm6j03t863reeakcm86k3ob3.apps.googleusercontent.com
passport.use(new GoogleStrategy({

	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
	console.log(accessToken);
})
);

app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
})
);

app.get('/auth/google/callback', passport.authenticate('google'));

/*app.get('/', (req, res) => {
	res.send({ hi: 'there'});
});*/


const PORT = process.env.PORT || 5000;
app.listen(5000);



