const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');

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

app.get('/find_user/:firstName/:lastName/:password', async(req, res) => {
  const {firstName, lastName, password} = req.params;
  //console.log(firstName,lastName,password);
  pool.query(`SELECT * FROM users WHERE first_name = '${firstName}' AND last_name = '${lastName}' AND password = '${password}'`, function (error, results, fields) {
    if (error) throw error;
    if(results.length == 0) return res.json({result: 'no result'})
    res.json({result: results[0]});
  });
})

app.get('/search_movies/:type/:page', async(req, res) => {
  const {type, page} = req.params;
  const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=5fb93387541fc093f329bc1481d3b3e8&language=en-US&page=${page}`)
  const data = await response.json();

  res.json({
    data: data.results
  })
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