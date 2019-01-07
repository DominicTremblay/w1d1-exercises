/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving"
];

var joinList = function(list) {
  var outputStr = "";
  for (var i = 0; i < list.length - 1; i++) {
    outputStr += list[i] + ", ";
  }
  return outputStr + list[list.length - 1];
};

var concepts = joinList(conceptList);

console.log("Today I learned about " + concepts + ".");
