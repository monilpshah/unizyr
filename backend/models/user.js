var db = require('../dbconnection'); //reference of dbconnection.js

var User = {

    getAllUsers: function(callback) {
        return db.query("Select * from user_tbl", callback);
    },
    getUserById: function(email, callback) {
        return db.query("select * from user_tbl where email=?", [email], callback);
    },
    addUser: function(User, callback) {
        return db.query("Insert into user_tbl values(?,?,?,?)", [User.name, User.email, User.mobile, User.address], callback);
    },
    deleteUser: function(email, callback) {
        return db.query("delete from user_tbl where email=?", [email], callback);
    },
    updateUser: function(email, User, callback) {
        return db.query("update user_tbl set name=?,mobile=?,address=? where email=?", [User.name, User.mobile, User.address, email], callback);
    }

};
module.exports = User;