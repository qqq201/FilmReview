import {Router} from 'express';
import movie_controller from '../controllers/movie_controller.js'

const router = Router()

export default router.use('/', movie_controller.index)
