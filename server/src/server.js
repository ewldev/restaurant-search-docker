const express = require('express');
const cors = require('cors');
const image = require('./controllers/restaurant');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {res.send("LOOK ITS WORKING") });
app.post('/search', (req, res) => { image.handleApiCall(req, res)});

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}...`);
});
