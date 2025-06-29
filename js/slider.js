var TIMEOUT = 6000;
 
var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
 
  var currentIndex = $activeRadio.index($radios);
  var radiosLength = $radios.length;
 
  $activeRadio.prop('checked', false);
 
  if (currentIndex >= radiosLength - 1) {
    $radios.first().prop('checked', true);
  } else {
    $activeRadio.next('input[class*="slide-radio"]').prop('checked', true);
  }
}