import { posts } from '../misc/constants.js';

export default function clearPosts() {
	for (let i = 0; i < posts.length; i += 1) {
		posts.pop();
	}
}
