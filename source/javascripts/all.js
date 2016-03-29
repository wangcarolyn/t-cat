//= require_tree .

$(document).ready(function(){
  $('.desk-list a').click(function(){
    $('.desk-list a').removeClass('selected');
    $(this).addClass('selected');
    $('#desk').removeClass();
    $('#desk').addClass($(this).attr('data-desk'));
  });


  $('.btn-message').hover(
    function () {
      $(this).addClass('tada');
    },
    function () {
      $(this).removeClass("tada");
    }
  );
});
