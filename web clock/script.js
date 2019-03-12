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
    setInterval(function(){
	    var time = new Date();
	    var hour = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();
	    if (seconds>$(".circle1").length){
	    	for(var i=0; i<seconds-$(".circle1").length; i++){
    			$("body").append('<div class="circle1"></div>');
    			movecircle1($(".circle1").last());
    		}
	    }
	    if (seconds<$(".circle1").length){
	    	for(var i=0; i<$(".circle1").length-seconds; i++){
	    		$(".circle1").get(0).remove()
	    	}
	    }
    }, 1000);

    setInterval(function(){
	    var time = new Date();
	    var hour = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();
	    if (minutes>$(".circle2").length){
	    	for(var i=0; i<minutes-$(".circle2").length; i++){
    			$("body").append('<div class="circle2"></div>');
    			movecircle2($(".circle2").last());
    		}
	    }
	    if (minutes<$(".circle2").length){
	    	for(var i=0; i<$(".circle2").length-minutes; i++){
	    		$(".circle2").get(0).remove()
	    	}
	    }
    }, 1900);

    setInterval(function(){
	    var time = new Date();
	    var hour = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();
	    if (hours>$(".circle3").length){
	    	for(var i=0; i<hours-$(".circle3").length; i++){
    			$("body").append('<div class="circle3"></div>');
    			movecircle3($(".circle3").last());
    		}
	    }
	    if (hours<$(".circle3").length){
	    	for(var i=0; i<$(".circle3").length-hours; i++){
	    		$(".circle3").get(0).remove()
	    	}
	    }
    }, 2800);

    // movecircle3();

    // movecircle2();
    
    // movecircle1();

    $(".circle1").each(function(){
    	movecircle1(this);
    })

    $(".circle2").each(function(){
    	movecircle2(this);
    })

    $(".circle3").each(function(){
    	movecircle3(this);
    })

	setTimeout(function(){
	    $(".reset").addClass("alarm"); 
	    moveresetbutton();
	  }, 15000);

	$(".reset").click(function() { 
	    $(".reset").removeClass("alarm");
	  });

	setTimeout(function(){
	    $(".background").addClass("alarm"); 
	  }, 15000);

	$(".reset").click(function() { 
	    $(".background").removeClass("alarm");
	  });

	setTimeout(function(){
	    $(".circle1").addClass("alarm"); 
	  }, 15000);

	$(".reset").click(function() { 
	    $(".circle1").removeClass("alarm");
	  });

		setTimeout(function(){
	    $(".circle2").addClass("alarm"); 
	  }, 15000);

	$(".reset").click(function() { 
	    $(".circle2").removeClass("alarm");
	  });

		setTimeout(function(){
	    $(".circle3").addClass("alarm"); 
	  }, 15000);

	$(".reset").click(function() { 
	    $(".circle3").removeClass("alarm");
	  });

   var circle1time= 1000;
   function movecircle1(div){
   	$(div).each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle1time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "94vw", "top" : pos2}, circle1time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "89vh"}, circle1time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4},  circle1time, "linear", function(){
	    				movecircle1(this);
	    			});
	    		});
	    	});
	    });
   	});
   
   }


   var circle2time= 1900;
   function movecircle2(div){
   	$(div).each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle2time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "94vw", "top" : pos2}, circle2time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "89vh"}, circle2time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4}, circle2time, "linear", function(){
	    				movecircle2(this);
	    			});
	    		});
	    	});
	    });
   	});
   
   }

   var circle3time= 2800;
   function movecircle3(div){
   	$(div).each(function(){
		var pos= Math.random()*90+"vw";
	    $(this).animate({"left" : pos, "top" : 0}, circle3time, "linear", function(){
	    	var pos2= Math.random()*90+"vh";
	    	$(this).animate({"left" : "92vw", "top" : pos2}, circle3time, "linear", function(){
	    		var pos3= Math.random()*90+"vw";
	    		$(this).animate({"left" : pos3, "top" : "85vh"}, circle3time, "linear", function(){
	    			var pos4= Math.random()*90+"vh";
	    			$(this).animate({"left" : 0, "top" : pos4}, circle3time, "linear", function(){
	    				movecircle3(this);
	    			});
	    		});
	    	});
	    });
   	});
   }
    

   var resettime= 2200;
   function moveresetbutton(){
	   	$(".reset.alarm").each(function(){
			var pos= Math.random()*90+"vw";
		    $(this).animate({"left" : pos, "top" : 0}, resettime, "linear", function(){
		    	var pos2= Math.random()*90+"vh";
		    	$(this).animate({"left" : "92vw", "top" : pos2}, resettime, "linear", function(){
		    		var pos3= Math.random()*90+"vw";
		    		$(this).animate({"left" : pos3, "top" : "85vh"}, resettime, "linear", function(){
		    			var pos4= Math.random()*90+"vh";
		    			$(this).animate({"left" : 0, "top" : pos4}, resettime, "linear", moveresetbutton);
		    		});
		    	});
		    });
	   	});
   }




});