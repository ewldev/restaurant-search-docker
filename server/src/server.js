const path = require('path');
const cors = require('cors');
const express = require('express');
const image = require('./controllers/restaurant');
// const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8000;

// app.use(cors({
//   origin: 'http://localhost:3000',
// }));
app.use(cors());
// app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res)=> {res.send("LOOK ITS WORKING") });
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/search', (req, res) => { image.handleApiCall(req, res)});

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}...`);
});
