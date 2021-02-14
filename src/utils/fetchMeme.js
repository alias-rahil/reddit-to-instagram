import axios from 'axios';
import sample from './sample.js';
import { Post } from './models.js';
import { subreddit, api } from '../misc/constants.js';

export default async function fetchMeme() {
	try {
		const { data } = await axios.get(
			api.replace('%sub%', sample(subreddit, 1)[0]),
		);
		const postArray = data.data.children;
		const { title, author, url } = sample(postArray, 1)[0].data;
		const post = await Post.findOne({
			url,
		});
		if (post || !url.endsWith('.jpg')) {
			return fetchMeme();
		}
		await Post.create({
			url,
		});
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
