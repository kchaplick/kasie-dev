$(document).ready(function(){
  let height= $(window).height()
  console.log(height);
  $("section").css('min-height', height);

  $('.sidenav').sidenav();

});

$(window).resize(function(){
let height= $(window).height()
  console.log(height);
  $("section").css('min-height', height);
});
