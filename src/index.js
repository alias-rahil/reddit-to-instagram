import './misc/dotenv.js';
import nodeSchedule from 'node-schedule';
import postInsta from './utils/postInsta.js';
import {
	postSchedule, clearArraySchedule, posts, maxRandomDelay,
} from './misc/constants.js';

import getRandomArbitrary from './utils/getRandomArbitrary.js';

nodeSchedule.scheduleJob(postSchedule, () => {
	setTimeout(postInsta, getRandomArbitrary(0, maxRandomDelay));
});

nodeSchedule.scheduleJob(clearArraySchedule, () => {
	posts.length = 0;
});
