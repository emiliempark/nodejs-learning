var crypto = require('crypto');

// var ciphers = crypto.getCiphers();
// console.log(ciphers);

// cipher
var cipher = crypto.createCipher('aes256', 'password'); // pass type of cipher and key
cipher.update('TestCipher', 'ascii', 'hex'); // pass normal text / [input type]/ [output type]
var ciphered = cipher.final('hex'); // pass output type

var decipher = crypto.createDecipher('aes256', 'password');
decipher.update(ciphered, 'hex', 'ascii');
var deciphered = decipher.final('ascii');
console.log(ciphered, deciphered);


//hmac, hash

var hmac = crypto.createHmac('sha256', 'hash password');
var pass = hmac.update('TestHmac').digest('hex'); // digest 'output type'

console.log(pass);
