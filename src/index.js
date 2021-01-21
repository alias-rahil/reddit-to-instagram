import './misc/dotenv.js';
import nodeSchedule from 'node-schedule';
import { schedule, error, posts } from './misc/constants.js';
import generateCaption from './utils/generateCaption.js';
import fetchMeme from './utils/fetchMeme.js';
import postInsta from './utils/postInsta.js';

async function post() {
	try {
		const { titleFinal, authorFinal, imageFinal } = await fetchMeme();
		const caption = generateCaption(titleFinal, authorFinal);
		return postInsta(imageFinal, caption);
	} catch (e) {
		return Promise.reject(e);
	}
}

nodeSchedule.scheduleJob(schedule, async () => {
	const timestamp = (new Date()).toString();
	let ret = false;
	while (!ret) {
		try {
			// eslint-disable-next-line no-await-in-loop
			const publishedPost = await post();
			console.log({ status: 'success', publishedPost, timestamp });
			ret = true;
		} catch (e) {
			if (error !== e.message) {
				console.error({ status: 'failed', e, timestamp });
				ret = true;
			}
		}
	}
});

nodeSchedule.scheduleJob('0 0 * * SUN', () => {
	for (let i = 0; i < posts.length; i += 1) {
		posts.pop();
	}
});
