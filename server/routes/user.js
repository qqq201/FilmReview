import {Router} from 'express';
import UserController from '../controllers/user_controller.js'

const router = Router()
router.use('/login', UserController.login);
router.use('/signup', UserController.signup);
router.use('/update', UserController.update);
router.use('/:id/view', UserController.view);

export default router;

