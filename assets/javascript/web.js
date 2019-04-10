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


var skillsDiv = $('#skills');

$(window).on('scroll', function(){
	var winT = $(window).scrollTop(),
  	winH = $(window).height(),
  	skillsT = skillsDiv.offset().top;
  if(winT + winH  > skillsT){
  	$('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },3000);
    });
  }
});

