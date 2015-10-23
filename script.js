$(document).ready(function () {
  //header showing whose turn it is
  var player = 1;
  var turn = $('h2').html("It's Player " + player + "'s Turn");

//players take turns and cannot click on a cell that already has a value
  $('p').on('click',function (){
    var cellImage = $(this).css('background-image');
    if (player == 1 & cellImage == 'none') {
      // $(this).css('background-image','no-repeat');
      $(this).css('background-image','url(O.png)');
      player = 2;
      var turn = $('h2').html("It's Player " + player + "'s Turn");
    } else if (cellImage == 'none'){
      $(this).css('background-image','url(X.png)');
      player = 1;
      var turn = $('h2').html("It's Player " + player + "'s Turn");
    }
  });

  //if reset is hit all the cells are cleared
  $('button').on('click',function (){
    $('p').css('background-image','none');
  });
});
