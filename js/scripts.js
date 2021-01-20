function leap(year) {

  return sentence;
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    let user = parseInt($('#year').val());
    let sentence = leap(user);
    $('.alert').text(sentence);
  });
})