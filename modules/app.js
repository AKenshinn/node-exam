var module1 = require('./module1');
var module2 = require('./module2');
var User = require('./User');

module1.print('This is module1');
console.log('module2.name is ' + module1.name);

module2.print('This is module2');
module1.print('module2.name is ' + module2.name);

var anat = User();
var bank = User();

anat.firstName = 'anat';
bank.firstName = 'bank';

console.log('Anat : ' + JSON.stringify(anat));
console.log('Bank : ' + JSON.stringify(bank));




