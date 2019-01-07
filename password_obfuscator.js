var arg = process.argv[2];

var obfuscate = function ( str ) {
  return 
  str
    .replace(/a/gi, 4)
    .replace(/e/gi, 3)
    .replace(/o/gi, 0)
    .replace(/l/gi, 1);
}

console.log( obfuscate( arg ) );