/**
 * Created by MRG on 12/11/14 AD.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String ,
    password: String ,
    email: String
});

module.exports = mongoose.model('User', UserSchema);