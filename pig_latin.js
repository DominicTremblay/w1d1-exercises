var args = process.argv.slice(2);

var convertPigLatin = function( word ) {
  return word.slice(1) + word[0] + 'ay';
}

var convertEach = function( args ) {
  var outputStr = '';

  for ( var i = 0; i < args.length; i++ ) {
    outputStr += convertPigLatin(args[i]) + ' ';
  }
  return outputStr.slice( 0, -1 );
}

console.log( convertEach( args ) );

