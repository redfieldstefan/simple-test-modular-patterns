'use strict';

var Greeter = module.exports = exports = function() {};

Greeter.prototype.greet = function(name) {
	return (name + ', my man, whaddup?');
};
