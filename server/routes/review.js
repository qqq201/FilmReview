import {Router} from 'express';
import ReviewController from '../controllers/review_controller.js'

const router = Router()
// POST
router.use('/:review_id/approve', ReviewController.approveReview);
router.use('/:review_id/deny', ReviewController.denyReview);
// GET
router.use('/:movie_id/pReview', ReviewController.getListPendingReview);
router.use('/:movie_id', ReviewController.getListReview);
export default router

