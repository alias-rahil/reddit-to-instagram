import './misc/dotenv.js';
import './misc/db.js';
import nodeSchedule from 'node-schedule';
import postInsta from './utils/postInsta.js';
import getRandomArbitrary from './utils/getRandomArbitrary.js';
import { followUsers, unfollowUsers } from './utils/followUnfollowUsers.js';
import { User } from './utils/models.js';
import {
	postSchedule,
	clearArraySchedule,
	maxPostDelay,
	followSchedule,
	maxFollowDelay,
	doUnfollow,
	doFollow,
	doPost,
} from './misc/constants.js';

nodeSchedule.scheduleJob(clearArraySchedule, async () => {
	try {
		await User.deleteMany();
	} catch (e) {
		console.error({
			message: e.message,
		});
	}
});
if (doPost) {
	nodeSchedule.scheduleJob(postSchedule, () => {
		setTimeout(postInsta, getRandomArbitrary(0, maxPostDelay));
	});
}
if (doFollow) {
	nodeSchedule.scheduleJob(followSchedule, () => {
		setTimeout(followUsers, getRandomArbitrary(0, maxFollowDelay));
	});
}
if (doUnfollow) {
	nodeSchedule.scheduleJob(followSchedule, () => {
		setTimeout(unfollowUsers, getRandomArbitrary(0, maxFollowDelay));
	});
}
