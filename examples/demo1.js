// const logger = require('lok');
const logger = require('../lok');

// stdout/stderr without lok
console.log("Hello %s!", "stdout");
console.error("Hello %s!", "stderr");

// stdout/stderr with lok
logger.log("Hello %s!", "stdout");  // alias for logger.info()
logger.error("Hello %s!", "stderr");


// Log Levels (default level: info )
logger.setLevel("error");
logger.error("MSG[E]: %s", "Error message"); // -> MSG[E]: Error message
logger.info("MSG[E]: %s", "Info message");   // -> no output
logger.trace("MSG[E]: %s", "Trace message"); // -> no output

logger.setLevel("info");
logger.error("MSG[I]: %s", "Error message"); // -> MSG[I]: Error message
logger.info("MSG[I]: %s", "Info message");   // -> MSG[I]: Info message
logger.trace("MSG[I]: %s", "Trace message"); // -> no output

logger.setLevel("trace");
logger.error("MSG[T]: %s", "Error message"); // -> MSG[T]: Error message
logger.info("MSG[T]: %s", "Info message");   // -> MSG[T]: Info message
logger.trace("MSG[T]: %s", "Trace message"); // -> MSG[T]: Trace message
