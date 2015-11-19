function print(data) {
  console.log('print : ' + data);
}

var name = 'module1';

module.exports.print = print;
module.exports.name = name;


