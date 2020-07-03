const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Username: String,
    Password: String,
    StaffID: String
} , { collection: 'accounts' } );

var Account = mongoose.model('accounts', accountSchema);

module.exports = Account;