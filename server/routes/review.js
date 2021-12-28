import {Router} from 'express';
import ReviewController from '../controllers/review_controller.js'

const router = Router()

router.use('/review/:movie_id', ReviewController.getListReview);
router.use('/gallery/:movie_id/pReview', ReviewController.getListPendingReview);




export default router
