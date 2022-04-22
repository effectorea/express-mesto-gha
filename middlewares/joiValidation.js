const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

module.exports.cardValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
  }),
});

module.exports.userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().custom((value, helpers) => {
      if (validator.isUrl(value)) {
        return value;
      }
      return helpers.message('Ссылка не подходит');
    }),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.userProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.avatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().custom((value, helpers) => {
      if (validator.isUrl(value)) {
        return value;
      }
      return helpers.message('Ссылка не подходит');
    }),
  }),
});

module.exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.cardIdValidation = celebrate({
  body: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
});

module.exports.userIdValidation = celebrate({
  body: Joi.object().keys({
    userId: Joi.string().length(24).hex(),
  }),
});
