const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());

let mysql = require('mysql');
let pool = mysql.createPool({
  host     : process.env.HOST,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
});

// Dev logging
if (process.env.NODE_ENV === 'development') {
    console.log('development mode');
    app.use(morgan('dev'));
  }

// app.get('/', (req, res) => {
//     res.send('This is the homepage');
// })

app.get('/test', (req, res) => {
  res.json({
    "message" : "It works!"
  })
})

app.get('/get_users', (req, res) => {
    pool.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      // console.log('The first result is: ', results[0]);
      res.json(results);
    }); 
})

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});