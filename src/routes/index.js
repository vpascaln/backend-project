import express from 'express';
import { indexPage, funPage } from '../controllers';
import { messagesPage, addMessage } from '../controllers/messages';
import { modifyMessage, performAsyncAction } from '../middlewares';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/fun', funPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage,  addMessage);

export default indexRouter;
