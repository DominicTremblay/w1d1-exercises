var args = process.argv.slice(2);

var reverseStr = function ( str ) {
  var reverseStr = "";
  for ( var i = str.length - 1; i >= 0; i-- ) {
      reverseStr += str[i];
  }
  return reverseStr;
}

for ( var i = 0; i < args.length; i++ ) {
  console.log(reverseStr(args[i]));
}
