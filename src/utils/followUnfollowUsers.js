import ig from './ig.js';
import sample from './sample.js';
import getRandomArbitrary from './getRandomArbitrary.js';
import { hashtagDump, unfollowAfter, maxUnfollowDelay } from '../misc/constants.js';

export default async function followUnfollowUsers() {
	try {
		const { items } = await ig.feed.tag(sample(hashtagDump, 1)[0].slice(1)).request();
		const postPK = sample(items, 1)[0].pk;
		const { users } = await ig.media.likers(postPK);
		const { pk } = sample(users, 1)[0];
		await Promise.all([
			ig.friendship.create(pk),
			new Promise((resolve) => setTimeout(
				resolve,
				getRandomArbitrary(unfollowAfter, unfollowAfter + maxUnfollowDelay),
			)),
		]);
		await ig.friendship.destroy(pk);
	} catch (e) {
		console.error({ message: e.message });
	}
}
