var translateFunction = function(word) {
  if (word.match(/[^a-z]/i)) {
    return word;
  } else {
    word = word + "way";
    return word;
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
