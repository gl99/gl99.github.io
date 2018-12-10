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
    $(".intro-stuff").addClass("removeintro")
    console.log("click");
  });

  //$(".pics").click(function() {
  //  $(".pic1").fadedown(".pics");
  //});

/*$(".pics").mouseenter(function(){
    $(this).addClass("grow");
  });
 /*$(".pics div").click(function(){
   $("body").append("<img src='"+$(this).attr("data-file")+"'>");
 });*/
 $("img").click(function(){
    $("body").remove("img");
 });

$(".pic1").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic2").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic3").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic4").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic5").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic6").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic7").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic8").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic9").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic10").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic11").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic12").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic13").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic14").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic15").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic16").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic17").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$(".pic18").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

});





