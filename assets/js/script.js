$(document).ready(function(){ // begin document.ready block

	/* Photo click = play sound */

	var audioList = ["images/aTrim.m4a", "images/bTrim.m4a", "images/cTrim.m4a", "images/dTrim.m4a", "images/eTrim.m4a", "images/fTrim.m4a"]

	$("#gallery img").click(function(){

		var bag = $(this).attr("num");
		console.log(bag);
		var myaudio = audioList[bag];
		console.log(myaudio);
		$("#mysound").attr("src", myaudio);
		$("#mysound").get(0).play();
	});

	$("#gallery2 img").click(function(){

		var bag = $(this).attr("num");
		console.log(bag);
		var myaudio = audioList[bag];
		console.log(myaudio);
		$("#mysound").attr("src", myaudio);
		$("#mysound").get(0).play();
	});

	$("#gallery3 img").click(function(){

		var bag = $(this).attr("num");
		console.log(bag);
		var myaudio = audioList[bag];
		console.log(myaudio);
		$("#mysound").attr("src", myaudio);
		$("#mysound").get(0).play();
	});

}); //end document.ready block
