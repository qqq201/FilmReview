import {Router} from 'express';
import NewsController from '../controllers/news_controller.js'

const router = Router()
router.use('', NewsController.getNews);
router.use('/upload', NewsController.upload);

export default router;