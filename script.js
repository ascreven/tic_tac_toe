$(document).ready(function () {

  $('p').on('click',function (){
    $(this).css('background','blue');
  });
  $('button').on('click',function (){
    $('p').css('background','white');
  });
});
