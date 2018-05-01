// Logger using Javascript ES5

var LogES5 = require('./es5');

// Using the function 'info' within logger system
var LoggerES5 = LogES5.getLogger();
LoggerES5.info("ES5 Logging system message!");

// Test to check if 2 loggers are the same instance
var LoggerES5_2 = LogES5.getLogger();
if(LoggerES5 === LoggerES5_2) {
	console.log("2 ES5 Loggers is the same instance!");
}


// Logger using Javascript 2015/ES6
const LogES6 = require('./es6');

var LoggerES6 = new LogES6();

LoggerES6.info("ES6 Logging system message!")

var LoggerES6_2 = new LogES6();

if(LoggerES6 === LoggerES6_2) {
	console.log("2 ES6 Loggers is the same instance!");
}


