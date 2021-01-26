import './misc/dotenv.js';
import nodeSchedule from 'node-schedule';
import { postSchedule, clearArraySchedule } from './misc/constants.js';
import postInsta from './utils/postInsta.js';
import clearPosts from './utils/clearPosts.js';

nodeSchedule.scheduleJob(postSchedule, () => {
	postInsta();
});

nodeSchedule.scheduleJob(clearArraySchedule, () => {
	clearPosts();
});
