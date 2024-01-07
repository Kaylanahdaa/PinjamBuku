const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

const connectDB = require('../server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 3000;

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json()); // Middleware untuk parsing JSON

app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, '../public/css')));
app.use('/img', express.static(path.resolve(__dirname, '../public/img')));
app.use('/js', express.static(path.resolve(__dirname, '../public/js')));

app.use('/', require('../server/routes/router'));

app.get('/api/users', (req, res) => {
  res.send('Hello from /api/users');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/search', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&key=YOUR_GOOGLE_BOOKS_API_KEY&maxResults=40`
    );
    const bookData = response.data.items || [];
    res.render('search', { bookData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
