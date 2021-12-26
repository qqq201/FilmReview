import {Router} from 'express';
import MovieController from '../controllers/movie_controller.js'

const router = Router()

router.use('/gallery/:id', MovieController.getModGallery);
router.use('/gallery', MovieController.getGallery);
router.use('/:id/rate', MovieController.rate);
router.use('/:id/moderators', MovieController.getModerators);
router.use('/:id/assignModerators', MovieController.assignModerators);
router.use('/:id', MovieController.getInfo);


export default router
