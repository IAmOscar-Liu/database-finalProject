const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const fetch = require('node-fetch');
const uuid = require('uuidv4').default;
const ip = require('ip');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
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

app.get('/get_user_ip', (req, res) => {
  res.json({
    "ip" : ip.address()
  })
})

app.get('/get_users', (req, res) => {
    pool.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      // console.log('The first result is: ', results[0]);
      res.json(results);
    }); 
})

app.post('/find_user', async(req, res) => {
  console.log(req.body);
  const {firstName, lastName, password} = req.body;
  //console.log(firstName,lastName,password);
  pool.query(`SELECT * FROM users WHERE first_name = '${firstName}' AND last_name = '${lastName}' AND password = '${password}'`, function (error, results, fields) {
    if (error) throw error;
    if(results.length == 0) return res.json({result: 'no result'})
    res.json({result: results[0]});
  });
})

app.post('/update_user', async(req, res)=> {
  const {firstName, lastName, email, uuid} = req.body;
  pool.query(`UPDATE users SET first_name = '${firstName}', last_name='${lastName}', email='${email}' WHERE uuid = '${uuid}';`, function (error, results, fields) {
    if (error) throw error;
    res.json({result: results});
  });
})

app.post('/check_user', async(req, res)=> {
  const {firstName, lastName, password, email} = req.body;
  pool.query(`SELECT * FROM users WHERE first_name ='${firstName}' AND last_name = '${lastName}';`, function (error, results, fields) {
    if (error) throw error;
    if(results.length == 0) return res.json({ message: 'no such user'})
    res.json({message: 'this user is already existed'});
  });
})

app.post('/create_user', async(req, res)=> {
  const {firstName, lastName, password, email} = req.body;
  pool.query(`INSERT INTO users (uuid, first_name, last_name, email, password, register_date) values ('${uuid()}', '${firstName}', '${lastName}', '${email}', '${password}', now());`, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
  // res.json({
  //   firstName,lastName,password, email
  // })
})

app.post('/save_history', async(req, res) => {
  const {user_id, uuid, movies_info} = req.body;
  //console.log(user_id, uuid, movies_info);
  let query = `INSERT INTO history (user_id, uuid, title, price, amount, img, purchase_date) values `;
  movies_info.forEach((movie, index) => {
    query += `(${user_id}, '${uuid}', '${movie.title}', ${movie.price} ,${movie.amount}, '${movie.img}', now())`;
    if(movies_info.length-1 == index) query += `;`
    else query += `,`
  })
  //console.log(query);
  //res.json({query: query});
  pool.query(query, function (error, results, fields){
    if(error) throw error;
    res.json(results)
  })
})

app.post('/get_history', async(req, res) => {
    const {uuid} = req.body;
    pool.query(`SELECT * FROM history WHERE uuid = '${uuid}' ORDER BY purchase_date;`, function (error, results, fields){
      if(error) throw error;
      if(results.length == 0) return res.json({history: []})
      res.json({ history: results });
    })
})

app.post('/save_favorites', async(req, res) => {
  const {user_id, uuid, fav_info, fav_uuid} = req.body;
  //console.log(user_id, uuid, fav_info, fav_uuid);

  let query = `INSERT INTO favorites (user_id, uuid, fav_uuid, title, price, img, add_date) VALUES `;
  fav_info.forEach((fav, index) => {
    query += `(${user_id}, '${uuid}', '${fav_uuid[index]}', '${fav.title}', ${fav.price}, '${fav.img}', now())`;
    if(fav_info.length-1 == index) query += `;`
    else query += `,`
  })
  //console.log(query);
  //res.json({query: query});

  pool.query(query, function (error, results, fields){
    if(error) throw error;
    res.json(results)
  })
})

app.post('/find_favorites', async(req, res) => {
    const {uuid} = req.body;
    pool.query(`SELECT * FROM favorites WHERE uuid = '${uuid}' ORDER BY add_date;`,function(error, results, fields){
      if(error) throw error;
      res.json(results)
    })
})

app.post('/delete_favorites', async(req, res) => {
    const {fav_uuids} = req.body;  
    let query = `DELETE FROM favorites WHERE fav_uuid IN ('`;
    query += fav_uuids.join(`','`);
    query += `');`;

    //console.log(query); 
    //res.json({results: query});
    pool.query(query, function(error, results, fields){
      if(error) throw error;
      res.json(results);
    })
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