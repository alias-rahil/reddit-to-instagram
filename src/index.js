import './misc/dotenv.js';
import './misc/db.js';

import nodeSchedule from 'node-schedule';
import postInsta from './utils/postInsta.js';
import followUnfollowUsers from './utils/followUnfollowUsers.js';
import getRandomArbitrary from './utils/getRandomArbitrary.js';

import {
	postSchedule,
	clearArraySchedule,
	posts,
	maxPostDelay,
	followSchedule,
	maxFollowDelay,
	doFollowUnfollow,
} from './misc/constants.js';

nodeSchedule.scheduleJob(postSchedule, () => {
	setTimeout(postInsta, getRandomArbitrary(0, maxPostDelay));
});

nodeSchedule.scheduleJob(clearArraySchedule, () => {
	posts.length = 0;
});

if (doFollowUnfollow) {
	nodeSchedule.scheduleJob(followSchedule, () => {
		setTimeout(followUnfollowUsers, getRandomArbitrary(0, maxFollowDelay));
	});
}
