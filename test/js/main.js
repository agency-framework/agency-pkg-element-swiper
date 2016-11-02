"use strict";

var js = require('agency-pkg-service-parser').setup(require('./packages'));

(function(){
    $(function() {
        js.parse();
    });
})();
