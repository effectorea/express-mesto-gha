const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { login, createUser } = require('./controllers/users');
const { userValidation, loginValidation } = require('./middlewares/joiValidation');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.post('/signin', loginValidation, login);
app.post('/signup', userValidation, createUser);

app.use('/users', require('./routes/users'));

app.use('/cards', require('./routes/cards'));

app.use(errors());

app.use('/', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
