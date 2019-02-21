$(document).ready(function() {
	var circle1time= 1000;
   setInterval(function() {
   	$(".circle1").each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle1time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "90vw", "top" : pos2}, circle1time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "90vh"}, circle1time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4},  circle1time, "linear");
	    		});
	    	});
	    });
   	});
   
   }, circle1time*4);



   var circle3time= 1000;
   setInterval(function() {
   	$(".circle3").each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle3time, function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "90vw", "top" : pos2}, circle3time, function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "90vh"}, circle3time, function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4}, circle3time);
	    		});
	    	});
	    });
   	});
   
   }, circle3time*4);
    
});