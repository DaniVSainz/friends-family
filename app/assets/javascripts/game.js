// function (toggling) {
//   // $(this).children().toggle();
//   console.log($(this).on('click'));
// };

$(document).ready(function(){
  var card1_front = "";
  var card1_back = "";
  var card2_front = "";
  var card2_back = "";



$("img.back").hide();
$('img.front').show();
var clickCount = 0
console.log(clickCount);

$("img.front").click(function() {


  if (clickCount === 0) {
      card1_front = $(this).closest('.card').find('img.front');
      card1_back = $(this).closest('.card').find('img.back');
      // console.log(card1_front);
      // console.log(card1_back);
      card1_front.hide();
      card1_back.show();
      clickCount++;
      // console.log(clickCount);

  }
  else if (clickCount === 1) {
    card2_front = $(this).closest('.card').find('img.front');
    card2_back = $(this).closest('.card').find('img.back');
    // console.log(card2_front);
    // console.log(card2_back);
    card2_front.hide();
    card2_back.show();
    // console.log($(card1_back).attr('src') !== $(card2_back).attr('src'))
    clickCount++;
    // console.log(clickCount)
      if ($(card1_back).attr('src') !== $(card2_back).attr('src')) {
        card1_front.delay(800).show(0);
        card2_front.delay(800).show(0);
        card1_back.delay(800).hide(0);
        card2_back.delay(800).hide(0);
      }
      clickCount = 0;
      // console.log(clickCount);
  }

});


});
