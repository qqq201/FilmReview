import {Router} from 'express';
import MovieController from '../controllers/movie_controller.js'

const router = Router()
router.use('/gallery', MovieController.getGallery);


export default router
