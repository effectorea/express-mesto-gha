const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

/* module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
    if (!user) {
      res.send({ message: `Такого пользователя c id${req.params.id}  не существует`});
      return;
  }
  res.send(user);
}) */

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
