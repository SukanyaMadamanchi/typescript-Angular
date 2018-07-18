var Youtube = /** @class */ (function () {
    function Youtube(title, releasedate, views, likes, dislikes, subscribers, uploadedby, commentcount) {
        var _this = this;
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getcommentscount = function () {
            return _this.commentscount;
        };
        this.getUploadedby = function () {
            return _this.uploadedby;
        };
        this.getReleasedate = function () {
            return _this.releasedate;
        };
        this.setViews = function (uv) {
            _this.views = uv;
        };
        this.setLikes = function (ul) {
            _this.views = ul;
        };
        this.setComments = function (uc) {
            _this.views = uc;
        };
        this.title = title;
        this.releasedate = releasedate;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.subscribers = subscribers;
        this.uploadedby = uploadedby;
        this.commentscount = commentcount;
    }
    return Youtube;
}()); // end of the class
var youtube1 = new Youtube("How it made ice cream", "jun 5 2018", 35192, 1800, 150, 19200, "Sandwich", 800);
console.log(youtube1.getViews());
console.log(youtube1.getlikes());
console.log(youtube1.getcommentscount());
youtube1.setViews(3519260);
youtube1.setLikes(19000);
youtube1.setComments(845);
console.log(youtube1.getTitle());
console.log(youtube1.getReleasedate());
console.log(youtube1.getlikes());
console.log(youtube1.getdislikes());
console.log(youtube1.getViews());
console.log(youtube1.getUploadedby());
console.log(youtube1.getSubscribers());
console.log(youtube1.getcommentscount());
