const { instaUsername = 'instaUsername', instaPassword = 'instaPassword' } = process.env;
const postSchedule = '0 */2 * * *';
const clearArraySchedule = '0 0 * * SUN';
const hashtagDump = '#actormemes #amazingmemes #americanmemes #animalmemes #animememes #annoyingthings #artistmeme #awful #awfulmeme #awkward #baseballmemes #basketballmemes #bassistmemes #beameme #bellylaugh #bememe #bestjokes #bestmemes #bestmemevideos #bestpuns #bizarrememe #boringmemes #boymemes #burstoutlaugh #catmeme #chickenmemes #cleverjokes #clevermemes #clownmemes #coldmemes #comedian #comedy #computermemes #coping #cornymeme #crazymemes #creepymemes #cruelmemes #dadjokes #dadmemes #dailycomedy #dank #dankmemes #dankspam #darkmemes #decentmemes #deliciously #delightfulmeme #dogmemes #dopememes #drivingmemes #drunkpeoplememes #dumbmemes #edgymemes #eggf0x #eggf0xdankmemes #eggf0xmemes #emotionmeme #englishmemes #enjoyable #entertaining #exmeme #familymemes #famousmemes #favoritememes #footballmemes #fortnitememes #friendmemes #fulltimememer #funnier #funniestmemes #funniestvideos #funny #funnymemes #funnymemesdaily #funnypets #funnyposts #funnypuns #funnyquote #funnyquotes #funnystories #funnystuff #funnythings #funnyvideos #funtimes #gamingmemes #geniusmemes #germanymeme #ghettomemes #girlmemes #gomeme #goofymemes #guitaristmemes #hahaha #havelaugh #highschoolmemes #hiphopmemes #honestmemes #horselaugh #housememes #humor #igmemes #imeme #instamemes #interestingmemes #ironic #italianmemes #joker #jokes #joking #justmemes #kanyewestmemes #kidmemes #lastmeme #latinmemes #laugher #laughingwithmemes #laughs #laughsome #laughworthy #lightmeme #likablememes #litmemes #lmao #logicmemes #lol #lovememes #lulz #makesomeonelaugh #managermemes #meaningful #meme #memeaccount #memeaddicts #memeanalyst #memearmy #memebased #memeboss #memechef #memecreativity #memeculture #memed #memedinner #memedose #memefame #memefarm #memefollow #memegod #memegraduate #memegroup #memeguy #memehearted #memehour #memehumor #memeimages #memeintelligence #memeit #memelab #memelanguage #memelecutre #memelord #mememaker #mememedia #mememedication #mememoments #memenation #memep #memepage #memeparody #memeplayers #memepresident #memequeen #memer #memereviewer #memerevolution #memeroom #memes #memescholar #memeschool #memescreator #memesdaily #memesgraciosos #memesounds #memespam #memespecialist #memesquad #memesrlife #memestar #memestory #memestuff #memesupreme #memetalk #memethings #memetime #memetrends #memeuniversity #memevibes #memevideos #memewar #memeworld #memezar #meming #memorable #merrymemes #mock #mockery #moodmemes #morale #mostrecentmemes #moviememes #nbamemes #newestmemes #nichememe #nichememes #nonsense #notfunny #obamamemes #oddlymemes #offensivememes #oldmeme #oldmemes #onememe #onlinememes #originalmemes #outlaugh #parody #partymemes #pewdsmemes #playdespacito #pokefun #policememes #popmemes #pradodyaccount #prememe #prettyfunny #promemer #questionablememes #quitefunny #rapmemes #recentmemes #reddit #redditdankmemes #redditmemes #relatablememes #relate #relationshipmemes #relevantmeme #rockmemes #rofl #roflmfao #rotflmao #russianmemes #sadmemes #sarcasm #sarcasticmemes #savagememes #scarymeme #schoolmemes #secretlymeming #sickmeme #sillymemes #singermemes #skatememes #snickermemes #soccermemes #sociology #socratesmemes #softmemes #songmemes #spanishmemes #spicymemes #spongebobmemes #stolenmemes #straightforward #stupidmemes #stylememes #surrealmeme #teachermemes #teehee #terribly #thisissosad #todaymemes #tomandjerry #topmeme #trumpmemes #ubermemes #ukmemes #unbelievable #unusualmeme #urbanmemes #usamemes #wellbeing #wethememe #workmemes #workoutmemes #wow #wowmemes #wtfmeme #youtubememe #youtubememes'.split(' ');
const subreddit = [
	'memes',
	'dankmemes',
	'depression_memes',
	'offensivejokes',
];
const captionTemplate = `%title%
Credits: u/%author%
Follow @%instaUsername%
.
.
.
.
.
.
.
%hashtags%`;
const posts = [];
const api = 'https://api.reddit.com/r/%sub%';

export {
	captionTemplate,
	instaUsername,
	hashtagDump,
	postSchedule,
	subreddit,
	instaPassword,
	posts,
	clearArraySchedule,
	api,
};
