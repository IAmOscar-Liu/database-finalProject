const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env
dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());

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