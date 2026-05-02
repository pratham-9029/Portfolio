const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/indexRoutes');
const { envConfig } = require('./config/dotenv.js');

const app = express();
const PORT = envConfig.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
