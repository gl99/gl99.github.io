document.addEventListener("DOMContentLoaded", function () {
	var playaudio=function(){
		document.querySelector("audio").play();
		console.log("playaudio")
	};
  var mugen = new MUGEN();
  mugen.initialize({ titleScreenImageURL: "./img/landscape.png", attackRadius: 85, monsterHitRadius: 150, attackDuration:600, jumpHeight: 275, makeResponsive:true, autoPlay:false, onGameStart: playaudio });
});

