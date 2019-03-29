document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({ titleScreenImageURL: "./img/landscape.png", attackRadius: 85, monsterHitRadius: 150, attackDuration:600, jumpHeight: 275, makeResponsive:true, autoPlay:false});
});

