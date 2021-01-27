import './misc/dotenv.js';
import nodeSchedule from 'node-schedule';
import { postSchedule, clearArraySchedule, posts } from './misc/constants.js';
import postInsta from './utils/postInsta.js';

nodeSchedule.scheduleJob(postSchedule, () => {
	postInsta();
});

nodeSchedule.scheduleJob(clearArraySchedule, () => {
	posts.length = 0;
});
