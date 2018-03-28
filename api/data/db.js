var mongoose = require('mongoose');
var dburl = 'mongodb://' + process.env.IP + ':27017/meanhotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
    console.log(Mongoose connected to ' + dburl');
});