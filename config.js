function MongoDBUrl() {
    var result = process.env.MONGOLAB_URI;
    if (result == null) {
        return "mongodb://heroku_8p69zslh:npapil38stqke4ispm7evn0lis@ds055915.mlab.com:55915/heroku_8p69zslh";
    }
}

function PostGreDBUrl() {
    var result = process.env.DATABASE_URL;
    if (result == null) {
        return "postgres://ejtwhakucjmigw:bnUQM7lWGB_1wUFoXZyehA7aYq@ec2-54-75-238-7.eu-west-1.compute.amazonaws.com:5432/d4rh73vgf449du";
    }
}

exports.MongoDBUrl = MongoDBUrl;
exports.PostGreDBUrl = PostGreDBUrl;