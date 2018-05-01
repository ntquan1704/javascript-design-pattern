let logger;

// One way to implement private method in ES6
const logInfo = Symbol('logInfo');

module.exports = class Logger {
	constructor(){
		if(!logger){
			logger = this;
		}

		return logger;
	}

	[logInfo](message){
		return console.log(message)
	}

	info(message) {
		return this[logInfo](message);
	}
}