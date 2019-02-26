$(document).ready(function(){
	var alarmIsOn = false;
	var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    for(var i=0; i<hour; i++){
    	$("body").append('<div class="circle3"></div>');
    }
    for(var i=0; i<minutes; i++){
    	$("body").append('<div class="circle2"></div>');
    }
    for(var i=0; i<seconds; i++){
    	$("body").append('<div class="circle1"></div>');
    }
    
	setTimeout(function(){
	    $(".reset").addClass("alarm"); 
	  }, 12000);

	$(".reset").click(function() { 
	    $(".reset").removeClass("alarm");
	  });

	setTimeout(function(){
	    $(".background").addClass("alarm"); 
	  }, 12000);

	$(".reset").click(function() { 
	    $(".background").removeClass("alarm");
	  });

	setTimeout(function(){
	    $(".circle1").addClass("alarm"); 
	  }, 12000);

	$(".reset").click(function() { 
	    $(".circle1").removeClass("alarm");
	  });

		setTimeout(function(){
	    $(".circle2").addClass("alarm"); 
	  }, 12000);

	$(".reset").click(function() { 
	    $(".circle2").removeClass("alarm");
	  });

		setTimeout(function(){
	    $(".circle3").addClass("alarm"); 
	  }, 12000);

	$(".reset").click(function() { 
	    $(".circle3").removeClass("alarm");
	  });

   var circle1time= 1000;
   setInterval(function(){
   	$(".circle1").each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle1time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "94vw", "top" : pos2}, circle1time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "89vh"}, circle1time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4},  circle1time, "linear");
	    		});
	    	});
	    });
   	});
   
   }, circle1time*4);


   var circle2time= 1900;
   setInterval(function() {
   	$(".circle2").each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle2time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "94vw", "top" : pos2}, circle2time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "89vh"}, circle2time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4}, circle2time, "linear");
	    		});
	    	});
	    });
   	});
   
   }, circle2time*4);

   var circle3time= 2900;
   setInterval(function() {
   	$(".circle3").each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle3time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "92vw", "top" : pos2}, circle3time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "85vh"}, circle3time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4}, circle3time, "linear");
	    		});
	    	});
	    });
   	});
   
   }, circle3time*4);
    

   var resettime= 3000;
   setInterval(function() {
   	$(".reset.alarm").each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, resettime, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "90vw", "top" : pos2}, resettime, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "83vh"}, resettime, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4}, resettime, "linear");
	    		});
	    	});
	    });
   	});
   
   }, resettime*4);
});