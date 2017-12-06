var translateFunction = function(word) {
  if (word.match(/[^a-z]/i)) {
    return word;
  }
  for (var i = 0; i < word.length; i +=1) {
    if (word.charAt(0).match(/[a, e, i, o, u]/i)) {
      word = word + "way";
      return word;
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
