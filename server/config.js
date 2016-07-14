function MongoDBUrl() {
	var result = process.env.MONGOLAB_URI;
	if (result == null) {
		return "mongodb://heroku_8p69zslh:npapil38stqke4ispm7evn0lis@ds055915.mlab.com:55915/heroku_8p69zslh";
	}
}

exports.MongoDBUrl = MongoDBUrl;