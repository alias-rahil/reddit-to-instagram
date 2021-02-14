import axios from 'axios';
import sample from './sample.js';

import {
	subreddit,
	posts,
	api,
} from '../misc/constants.js';

export default async function fetchMeme() {
	try {
		const {
			data,
		} = await axios
			.get(api.replace('%sub%', sample(subreddit, 1)[0]));

		const postArray = data.data.children;

		const {
			title,
			author,
			url,
		} = sample(postArray, 1)[0].data;

		if (posts.includes(url) || !url.endsWith('.jpg')) {
			return fetchMeme();
		}

		posts.push(url);

		return {
			title,
			author,
			url,
		};
	} catch {
		return {
			title: null,
			author: null,
			url: null,
		};
	}
}
