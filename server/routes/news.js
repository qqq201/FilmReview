import {Router} from 'express';
import NewsController from '../controllers/news_controller.js'

const router = Router()

router.use('/upload', NewsController.upload);
router.use('', NewsController.getNews);

export default router;