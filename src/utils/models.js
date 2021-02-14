import mongoose from 'mongoose';

const mongoosePostSchema = new mongoose.Schema({
	url: String,
});
const mongooseUserSchema = new mongoose.Schema({
	pk: String,
});
const Post = mongoose.model('Post', mongoosePostSchema);
const User = mongoose.model('User', mongooseUserSchema);
export { Post, User };
