"use strict";

var Controller = require('agency-pkg-base/Controller');
var Swiper = require('swiper');
require('style!swiper/dist/css/swiper.css');

module.exports = Controller.extend({

    initialize: function() {
        Controller.prototype.initialize.apply(this, arguments);
        var options = this.query('.swiper-container').dataset.swiperConfig;
        initSwiperWithOptions(this, JSON.parse(options));

    }

});

function initSwiperWithOptions(scope, options) {

    scope.swiper =  new Swiper('.swiper-container', options);
}
