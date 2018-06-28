const clc = require('cli-color');
const util = require('util');
const indentString = require('indent-string');

/**
 Log Levels:
    v: numeric value
    f: display format
    o: output
*/
const levels = {
	error: { v: 8, f: clc.red.bold , o: console.error},
	info: { v: 32, f: (x) => x , o: console.log },
	trace: {v: 256, f: clc.blue , o: console.log }
};



class Logger {
	constructor() {
	 this.logLevel = levels.info.v;
	 this.indentVal = 0;
	}


	log(level, msg, ...args){
		if(this.logLevel >= level){
			var lv = Object.values(levels).find(x => x.v === level);
			if(lv !== undefined){
				var out = util.format(msg, ...args);
				out = indentString(out, this.indentVal);
				lv.o(lv.f(out));
			}else {
				throw Error('unknown LogLevel');
			}
		}

	}

	setLevel(level){
		this.logLevel = levels[level].v;
	}

	error(msg, ...args){
		this.log(levels.error.v, msg, ...args);
		return this;
	}

	info(msg, ...args){
		this.log(levels.info.v, msg, ...args);
		return this;
	}

	trace(msg, ...args){
		this.log(levels.trace.v, msg, ...args);
		return this;
	}

	push(msg, ...args){
		if(msg !== undefined ){
			this.trace(msg, ...args);
		}
		this.indentVal += 2;
		return this;
	}

	indent(msg, ...args){
		this.push();
		this.trace(msg, ...args);
		this.pop();
		return this;
	}

	pop(msg, ...args){
	//args are just comments
		this.indentVal -= 2;
		if(this.indentVal < 0) throw Error('illegale stack state');
		return this;
	}




};


module.exports = new Logger();

