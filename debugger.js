const { DEBUG_MODE }= require('./constant.js');


function debug(...args) {
  if (DEBUG_MODE) {
    console.log(...args);
  }
}

module.exports = debug;