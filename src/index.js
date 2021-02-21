import './misc/dotenv.js';
import './misc/db.js';
import nodeSchedule from 'node-schedule';
import postInsta from './utils/postInsta.js';
import { followUsers, unfollowUsers } from './utils/followUnfollowUsers.js';
import { Post } from './utils/models.js';
import {
	postSchedule,
	clearArraySchedule,
	followSchedule,
	unfollowSchedule,
} from './misc/constants.js';

nodeSchedule.scheduleJob(clearArraySchedule, async () => {
	try {
		await Post.deleteMany();
	} catch (e) {
		console.error({
			message: e.message,
		});
	}
});
nodeSchedule.scheduleJob(postSchedule, () => {
	postInsta();
});
nodeSchedule.scheduleJob(followSchedule, () => {
	followUsers();
});
nodeSchedule.scheduleJob(unfollowSchedule, () => {
	unfollowUsers();
});
