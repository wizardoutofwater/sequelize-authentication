var pbkdf2 = require('pbkdf2');
var crypto = require('crypto');

var salt = '34130f8a1d5c156bd0644103bd84cb589152d207';
// 1734f7142a0f0ab4a3629ea36d20560cf51730e8

// salt: 127f2b64c1b9727d63208f3852b36ad6d7dbaa76
// hash: 61de06a11630b8ce949cbf1c8889a3c41c833ee2b4fdf70b61e0cb276a3fe9f6f98e5df25508cac9b071df10ed22d95e4dd8454c77edf6f15315ea6cc78cb12a17674eae9071cb67ea7b6c8090e0a1c40db77612fbacc22b2010e859fb0b0eca2793bbe83c6dce7b7065f3f0cdb3072c7abe5559e34b18d1214c722102ca45407618d8037af87603ac933034956f398ee130ac10af75366fff352de6a213760f0de77c31285e034c95c2083ec3b7c040bff20ccdcc85c278aae60e3757588501084212804b1d08aa25b7f452d011ea0e46545b5a0e203c569aca282a4c3141d09d6618a341c3b1dd09b4cb00b1ca0cb5817ff81d29534dd721b64751c4be35e5
// salt: 56b0c36a706bf930fc2cfcb79d651a9f8ff900d4
// hash: 5dd88a850f0d059ae1557b9b9b737276c7e7c318485ec25b233c8c1bcc455ffd586a846cad3f0ac4f53ed2ee1200f08994ecece6b94e8bddfe0820c825384b40ded77de3b7295fa54f553dab7691398a77fc1ba0f252722922929920b55ad7d7c0a40f0b3cfd832391a1e1ba6b0e1ec0625fdeabd7412be354f089743ba38ec878ea80bd25c8fa6531f2ad2345f3a1b67d04e29300025b6c696080c3a4b491eb71278759cc0cf440bb8f3b4ff3c502994d5aeb13f7d91a5e0ccddfc226f9de71e8b2f2d9f8bebd008d1d67cd88aea78bc422ebff53cc65a18161368b2ecc986c4a2c6972ccaa36c99dc184c8b7de841a8c778244ce3149a2e498e5068775d85b
//
// Hexadecimal /  Base 16
// 0 1 2 3 4 5 6 7 8 9 a b c d e f
// #000000 black #ffffff white
// 255 255 255
// Base 10 / decimal
// 0 1 2 3 4 5 6 7 8 9
// Binary / Base 2
// 0 1
console.log(" salt: " +  salt);

var password = 'SuperSecretPassword';


var key = pbkdf2.pbkdf2Sync(
  password, salt, 36000, 256, 'sha256'
);

var hash = key.toString('hex');


console.log(" hash: " + hash);