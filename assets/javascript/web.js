$(document).ready(function(){
   //matierialize initation of sidenav
   $('.sidenav').sidenav();

  //makes each section the entire screen heigh
  let height= $(window).height()
  console.log(height);
  $("section").css('min-height', height);

  $(window).resize(function(){
    let height= $(window).height()
    console.log(height);
    $("section").css('min-height', height);
  });

//animation for scroll for nav links
$("#aboutNavLink").click(function (event) {
  console.log("clicked")
  var element = document.getElementById("aboutMe");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$("#workNavLink").click(function (event) {
  console.log("clicked")
  var element = document.getElementById("myWorks");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$("#arrowToWorks").click(function (event) {
  console.log("clicked")
  var element = document.getElementById("myWorks");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$("#arrowToAbout").click(function (event) {
  console.log("clicked")
  var element = document.getElementById("aboutMe");
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


});
