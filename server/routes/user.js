import {Router} from 'express';
import UserController from '../controllers/user_controller.js'

const router = Router()
router.use('/login', UserController.login);

export default router;
