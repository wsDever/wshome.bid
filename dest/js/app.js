define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('angular-ui-router');

    var app = angular.module('wsWeb', ['ui.router']);

    asyncLoader.configure(app);

    // module.exports = app;
    return app ;
});
