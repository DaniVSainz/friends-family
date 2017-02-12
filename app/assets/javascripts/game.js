// function (toggling) {
//   // $(this).children().toggle();
//   console.log($(this).on('click'));
// };

$(document).ready(function(){
  $(this).on('click', function(){
    $('.card', this).flip();
 });
});
