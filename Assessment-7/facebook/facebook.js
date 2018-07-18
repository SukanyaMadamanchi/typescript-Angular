var Facebook = /** @class */ (function () {
    function Facebook(Name, birthDate, EducationDetails, Gender, LivesIn, Native, Religion, RelationshipStatus, WorksAt, MobileNumber, FriendsList) {
        var _this = this;
        this.getName = function () {
            return _this.Name;
        };
        this.getEducationDetails = function () {
            return _this.EducationDetails;
        };
        this.getbirthDate = function () {
            return _this.birthDate;
        };
        this.getGender = function () {
            return _this.Gender;
        };
        this.getLivesIn = function () {
            return _this.LivesIn;
        };
        this.getNative = function () {
            return _this.Native;
        };
        this.getReligion = function () {
            return _this.Religion;
        };
        this.getRelationStatus = function () {
            return _this.RelationshipStatus;
        };
        this.getWorksat = function () {
            return _this.WorksAt;
        };
        this.getMobileNumber = function () {
            return _this.MobileNumber;
        };
        this.getFriendsList = function () {
            return _this.FriendsList;
        };
        this.setLivesIn = function (ul) {
            _this.LivesIn = ul;
        };
        this.setFriendsList = function (uf) {
            _this.FriendsList = uf;
        };
        this.setMobileNumber = function (um) {
            _this.MobileNumber = um;
        };
        this.Name = Name;
        this.birthDate = birthDate;
        this.EducationDetails = EducationDetails;
        this.Gender = Gender;
        this.LivesIn = LivesIn;
        this.Native = Native;
        this.Religion = Religion;
        this.RelationshipStatus = RelationshipStatus;
        this.WorksAt = WorksAt;
        this.MobileNumber = MobileNumber;
        this.FriendsList = FriendsList;
    }
    return Facebook;
}()); // end of the class
var User = new Facebook("Venkatesh", "Aug 30 1991", "B.tech", "Male", "Karnataka", "Andhra Pradesh", "hindu", "Married", "Intel", 999999999, 1000);
console.log(User.getLivesIn());
console.log(User.getFriendsList());
console.log(User.getMobileNumber());
User.setFriendsList(2000);
User.setLivesIn("Chennai");
User.setMobileNumber(8888888888);
console.log(User.getName());
console.log(User.getbirthDate());
console.log(User.getEducationDetails());
console.log(User.getGender());
console.log(User.getLivesIn());
console.log(User.getNative());
console.log(User.getReligion());
console.log(User.getRelationStatus());
console.log(User.getWorksat());
console.log(User.getFriendsList());
console.log(User.getMobileNumber());
