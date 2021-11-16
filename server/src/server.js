const express = require('express');
// const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
// const knex = require('knex');

// const register = require('./controllers/register');
// const signin = require('./controllers/signin');
// const profile = require('./controllers/profile');
const image = require('./controllers/restaurant');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'postgres',
//     password : 'admin',
//     database : 'smart-brain'
//   }
// });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=> {res.send("LOOK ITS WORKING") })
// app.post('/signin', signin.handleSignin(db, bcrypt))
// app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
// app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/search', (req, res) => { image.handleApiCall(req, res)})

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}...`);
})
