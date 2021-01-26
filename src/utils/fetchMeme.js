import axios from 'axios';
import { subreddit, posts, api } from '../misc/constants.js';
import sample from './sample.js';

function updatePostsArray(title, author, url) {
	posts.push(url);
	return { title, author, url };
}

export default async function fetchMeme() {
	try {
		const { data } = await axios.get(api.replace('%sub%', sample(subreddit, 1)[0]));
		const postArray = data.data.children;
		const { title, author, url } = sample(postArray, 1)[0].data;
		return posts.includes(url) ? fetchMeme() : updatePostsArray(title, author, url);
	} catch {
		return { title: null, author: null, url: null };
	}
}
