// function (toggling) {
//   // $(this).children().toggle();
//   console.log($(this).on('click'));
// };

$(document).ready(function(){
  console.log('working')
  $(this).on('click', function(){
    $('.card', this).flip()
  });
});
