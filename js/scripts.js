var translateFunction = function(word) {
  if (word.match(/[^a-z]/i)) {
    return word;
  }
  for (var i = 0; i < word.length; i +=1) {
    if (word.charAt(0).match(/[a, e, i, o, u]/i)) {
      word = word + "way";
      return word;
    } else if ((word.charAt(i).match(/[u]/i)) && (word.charAt(i - 1).match(/[q]/i))){
      var consonant = word.slice(0, i + 1);
      var restOfWord = word.slice(i + 1, word.length);
      var newWord = restOfWord + consonant + "ay";
      return newWord;
    } else if ((word.charAt(i).match(/[a, e, i, o, u]/i))){
      var consonant = word.slice(0, i);
      var restOfWord = word.slice(i, word.length);
      var newWord = restOfWord + consonant + "ay";
      return newWord;
    } else if ((word.charAt(0).match(/[^y]/i)) && (word.charAt(i).match(/[a,e,i,o,u,y]/i))) {
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
