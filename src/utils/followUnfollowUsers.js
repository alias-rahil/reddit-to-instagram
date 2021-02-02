import ig from './ig.js';
import sample from './sample.js';
import getRandomArbitrary from './getRandomArbitrary.js';
import { hashtagDump, unfollowAfter, maxUnfollowDelay } from '../misc/constants.js';

export default async function followUnfollowUsers() {
	try {
		const users = await ig.search.users(sample(hashtagDump, 1)[0]);
		const user = sample(users, 1)[0];
		const { pk } = user;
		await ig.friendship.create(pk);
		setTimeout(
			ig.friendship.destroy,
			getRandomArbitrary(unfollowAfter, unfollowAfter + maxUnfollowDelay),
			pk,
		);
	} catch {
		followUnfollowUsers();
	}
}
