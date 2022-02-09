const path = require('path');
const cors = require('cors');
const DIST_DIR = path.join(__dirname, '../client/dist')
const express = require('express');
const app = express();
const port = 3000
// var router = express.Router();
const router = require('./routers.js')
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(DIST_DIR));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/movies', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})