var moment = require('moment');

var _ = require('underscore');

exports.REMOTE = !_.isUndefined(process.env.REMOTE) ? process.env.REMOTE : 'https://exposer.herokuapp.com';
exports.PORT = process.env.PORT || '5000';
exports.HOST = process.env.HOST;
exports.BEHIND_PROXY = !!(process.env.BEHIND_PROXY || false);
exports.SECURE_SESSION_COOKIE = !!(process.env.SECURE_SESSION_COOKIE || false);
exports.SITE_URL = process.env.SITE_URL || 'http://127.0.0.1:5000';
exports.MONGODB_URL = process.env.MONGODB_URL || process.env.MONGOHQ_URL || 'mongodb://localhost/exposer';
exports.TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
exports.TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;
exports.TWITTER_ACCESS_TOKEN_KEY = process.env.TWITTER_ACCESS_TOKEN_KEY;
exports.TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET;
exports.FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
exports.FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
exports.FACEBOOK_PAGE_NAME = process.env.FACEBOOK_PAGE_NAME;
exports.FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
exports.FACEBOOK_REALTIME_VERIFY_TOKEN = process.env.FACEBOOK_REALTIME_VERIFY_TOKEN;
exports.TOPSY_APIKEY = process.env.TOPSY_APIKEY;
exports.GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
exports.KEEP_ALIVE_INTERVAL = 25 * 60 * 1000; // ms
exports.LANGUAGE_DETECTION_MIN_LENGTH = 90; // How many characters should there be to try to detect the language
exports.TARGET_LANGUAGE_MAX_RANK = 3; // After which rank of the target language we start to trust the detected language
exports.MAX_POSTS_PER_REQUEST = 1000;
// TODO: Use limiter for proper limiting of all Tweeter requests
exports.TWITTER_REQUEST_INTERVAL = 15 * 60 * 1000 / 180; // Rate limit is 180 requests per 15 minutes
exports.TWITTER_MAX_QUERY_SIZE = 30;
exports.FACEBOOK_REALTIME_PATHNAME = '/fb/realtime';
exports.FACEBOOK_POLL_INTERVAL = process.env.FACEBOOK_POLL_INTERVAL || 3 * 60 * 1000; // ms
exports.FACEBOOK_THROTTLE = {
    'requests': 600,
    'interval': 600 * 1000 // ms
};

// TODO: Extend to all sections, to be able to enable/disable them, maybe with simply a list of section names to be shown
exports.SHOW_EVENTS = !_.isUndefined(process.env.SHOW_EVENTS) ? process.env.SHOW_EVENTS : true;
exports.SHOW_LINKS = !_.isUndefined(process.env.SHOW_LINKS) ? process.env.SHOW_LINKS : true;
exports.SECRET = process.env.SECRET || 'secret';
exports.TARGET_LANGUAGE = process.env.TARGET_LANGUAGE || 'slovene'; // Posts in which language we target
exports.I18N_LANGUAGES = process.env.I18N_LANGUAGES ? process.env.I18N_LANGUAGES.split(',') : ['en', 'sl']; // Which interface languages users can choose among
exports.TWITTER_QUERY = process.env.TWITTER_QUERY ? process.env.TWITTER_QUERY.split(',') : ['#gotofje', '#gotofsi', '#protesti', 'protestih', 'protestniki', '@gotofsi', '@gotofje', '#gotoviso', '#mbprotest', '#ljprotest', '#kkprotest', '#ceprotest', '#fertikje', '#demonstracije', '#zbor', '#nisegotovo', '#malomorgen', '#politikasi', '#volitve', '#vstaja', 'zborzarepubliko', '#korupcija', '#jansa', '#janša', '#jansevanje', '#pahor', '#stavkajs', '#stavka', 'javnisektor', 'onlyinslovenia', '#sviz', '#zombiji', '#tribunacd', '#tribunadsp', 'policijskadrzava', 'ograjamorapasti', 'zdajpadost', 'slorevolucija', '#vsinaulice', '#shodzzr', 'gotovivsi', 'policijskonasilje', 'protestival', 'vseslovenska', 'vseslovenski', '#gremogor', '#nezaupnica', '#padavlada'];
exports.FACEBOOK_QUERY = process.env.FACEBOOK_QUERY ? process.env.FACEBOOK_QUERY.split(',') : ['gotofje', 'gotofsi', 'protesti', 'protestih', 'protestniki', 'gotoviso', 'mbprotest', 'ljprotest', 'kkprotest', 'ceprotest', 'fertikje', 'demonstracije', 'nisegotovo', 'malomorgen', 'politikasi', 'zborzarepubliko', 'jansevanje', 'stavkajs', 'javnisektor', 'onlyinslovenia', 'tribunacd', 'tribunadsp', 'policijskadrzava', 'ograjamorapasti', 'zdajpadost', 'slorevolucija', 'vsinaulice', 'gotovivsi', 'policijskonasilje', 'protestival', 'vseslovenska', 'vseslovenski', 'demonstracij'];
exports.POSTS_RANGE_MIN = process.env.POSTS_RANGE_MIN ? moment.utc(process.env.POSTS_RANGE_MIN).toDate() : moment.utc([2012, 10, 24]).toDate();
exports.POSTS_FILTER = {
    'data.from.id': {'$nin': [
        // Henrik Grubelnik (https://www.facebook.com/henrik.grubelnik) overposting
        '100000591290520',
        // Valentino Robboni (https://www.facebook.com/valentino.robboni.1) non-related nudity
        '100004681320686'
    ]},
    'data.from_user': {'$nin': [
        // Japanese user using same keywords
        'blackout_info'
    ]},
    // TODO: This probably should not be filtered but just downvoted in advance (when we will have support for that)
    'language': {'$nin': [
        'italian',
        'turkish',
        'albanian',
        'latin',
        'spanish',
        'portuguese',
        'finnish',
        'norwegian',
        'lithuanian',
        'estonian',
        'latvian',
        'cebuano'
    ]}
};
