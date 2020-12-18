import express from 'express';
import { indexPage, funPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/fun', funPage);

export default indexRouter;