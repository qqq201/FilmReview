import {Router} from 'express';
import ReviewController from '../controllers/review_controller.js'

const router = Router()
router.use('/:movie_id/pReview', ReviewController.getListPendingReview);
router.use('/:movie_id', ReviewController.getListReview);

export default router

