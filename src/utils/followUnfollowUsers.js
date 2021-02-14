import ig from './ig.js';
import sample from './sample.js';
import getRandomArbitrary from './getRandomArbitrary.js';
import { User } from './models.js';
import { hashtagDump, maxUnfollowDelay } from '../misc/constants.js';

export async function followUsers() {
	try {
		const { items } = await ig.feed
			.tag(sample(hashtagDump, 1)[0].slice(1))
			.request();
		const postPK = sample(items, 1)[0].pk;
		const { users } = await ig.media.likers(postPK);
		const { pk } = sample(users, 1)[0];
		await ig.friendship.create(pk);
		await User.create({
			pk,
		});
	} catch (e) {
		console.error({
			message: e.message,
		});
	}
}
export function unfollowUsers() {
	setTimeout(async () => {
		try {
			const user = await User.findOneAndDelete();
			await ig.friendship.destroy(user.pk);
		} catch (e) {
			console.error({
				message: e.message,
			});
		}
	}, getRandomArbitrary(0, maxUnfollowDelay));
}
