const router = require('express').Router();
const {
  getUsers, getUserInfo, getUserById, updateProfile, updateAvatar,
} = require('../controllers/users');
const auth = require('../middlewares/auth');
const { userProfileValidation, avatarValidation, userIdValidation } = require('../middlewares/joiValidation');

router.get('/', auth, getUsers);
router.get('/me', auth, getUserInfo);
router.get('/:userId', userIdValidation, auth, getUserById);
router.patch('/me', auth, userProfileValidation, updateProfile);
router.patch('/me/avatar', avatarValidation, auth, updateAvatar);

module.exports = router;
