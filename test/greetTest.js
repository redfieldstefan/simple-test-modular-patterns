'use strict';

var expect = require('chai').expect;
var Greeter = require('../greeter');

describe("greeter.js test", function() {

	var informalGreeter;

	before(function(){
		informalGreeter = new Greeter();
	});

	it('Should return an informal greeting for the inputed name', function() {
		expect(informalGreeter.greet('Stefan')).to.eql("Stefan, my man, whaddup?");
	});

});