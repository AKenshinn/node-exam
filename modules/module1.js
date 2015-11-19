function print(data) {
  console.log('print : ' + data);
}

var name = 'module1';

var secret = 'This is secret!!';

module.exports.print = print;
module.exports.name = name;


