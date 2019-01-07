// var loopyLighthouse = function(range, multiples, words) {

//   var options = {

//     min: range.shift(),
//     max: range.shift(),
//     multipleA: multiples.shift(),
//     multipleB: multiples.shift(),
//     wordA: words.shift(),
//     wordB: words.shift()

//   }

//   for ( var i = options.min; i <= options.max; i++ ) {
//    if ( i % (options.multipleA * options.multipleB) === 0 ) {
//       console.log( options.wordA + " " + options.wordB );
//    } else if ( i % options.multipleA === 0 ) {
//      console.log( options.wordA );
//    } else if ( i % options.multipleB === 0) {
//      console.log( options.wordB );
//    } else {
//      console.log(i);
//    }

//   }
// }

var loopyLighthouse = function(range, multiples, words) {

  // create variables by destructuring
  var [ min, max ] = range;
  var [ multipleA, multipleB ] = multiples;
  var [ wordA, wordB ] = words;

  for ( var i = min; i <= max; i++ ) {
   if ( i % (multipleA * multipleB) === 0 ) {
      console.log( wordA + " " + wordB );
   } else if ( i % multipleA === 0 ) {
     console.log( wordA );
   } else if ( i % multipleB === 0) {
     console.log( wordB );
   } else {
     console.log(i);
   }

  }
  

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);