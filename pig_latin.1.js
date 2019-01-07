var args = process.argv.slice(2);

var convertPigLatin = function(args) {
  const output = "";
  for (var i = 0; i < args.length; i++) {
    var wordArray = args[i].split("");
    wordArray.push(wordArray.shift());
    wordArray.push("ay");
    output += wordArray.join("");
  }
  return output;
};

console.log(convertPigLatin(args));
