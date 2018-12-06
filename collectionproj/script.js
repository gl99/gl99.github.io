/*$(document).ready(function() {
  console.log("ready");
  $(".switch").click(function() {
    $(".box").toggleClass("red");
  });
  $(".box").click(function() {
    $(this).animate({left: Math.random()*500, top: Math.random()*500}, 500);
  });
});*/

$(document).ready(function() {
  console.log("ready");
  $(".enter").click(function() {
    $(this).removeClass("enter");
  });

  $(".pics").click(function() {
    $(".pic1").fadedown(".pics");
  });
});