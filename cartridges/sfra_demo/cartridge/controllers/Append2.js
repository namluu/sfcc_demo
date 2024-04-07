'use strict'

var server = require('server');
var base = require('*/cartridge/controllers/Append');

server.extend(base);
server.append('Start', function(req, res, next) {
    var viewData = res.getViewData();
    res.setViewData({param1: viewData.param1 + ' and new Append Example 2 extends the first one'});
    res.render("pdictExample");
    next();
});

module.exports = server.exports();
