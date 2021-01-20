function leap(year) {
  if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) {
      sentence = 'It is a leap year!';
    } else {
      sentence = 'It is NOT a leap year!';
    }
  } else {
    sentence = 'It is NOT a leap year!';
  }
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