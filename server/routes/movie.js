import {Router} from 'express';
import MovieController from '../controllers/movie_controller.js'

const router = Router()

router.use('/gallery', MovieController.getGallery);
router.use('/:id/rate', MovieController.rate);
router.use('/:id', MovieController.getInfo);


export default router
