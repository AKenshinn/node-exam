// default
// function query() {
  
//   setTimeout(function() {
//     return 'result';
//   }, 2000);
// }

// function main() {
//   console.log('Result : ' + query()) ;
// }

// using callback
function query(callback) {
  setTimeout(function() {
    callback('result');
  }, 2000);
}

function main() {

  query( function(result) {
    console.log('Result : ' + result) ;
  });
}

main();