var translateFunction = function(word) {
  if (word.match(/[^a-z]/i)) {
    return word;
  }
  for (var i = 0; i < word.length; i +=1) {
    if (word.charAt(0).match(/[a, e, i, o, u]/i)) {
      word = word + "way";
      return word;
    } else if ((word.charAt(i).match(/[a, e, i, o, u]/i))){
    var consonant = word.slice(0, i);
    var restOfWord = word.slice(i, word.length);
    var newWord = restOfWord + consonant + "ay";
    return newWord;
  }
  }
  }




$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var word = $("input#words").val();
    var translation = translateFunction(word);
    $("#result").text(translation);
  });
});
