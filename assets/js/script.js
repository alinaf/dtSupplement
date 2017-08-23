$(document).ready(function(){ // begin document.ready block

	/* Photo click = play sound */

	var audioList = ["images/aTrim.m4a", "images/bTrim.m4a", "images/cTrim.m4a", "images/dTrim.m4a", "images/eTrim.m4a", "images/fTrim.m4a"]

	$("#gallery img").click(function(){

		var audioPlayer = document.getElementById("mysound");
		var source = audioPlayer.getAttribute("src");
		console.log(source);

		var bag = $(this).attr("num");
		var myaudio = audioList[bag];
		$("#mysound").attr("src", myaudio);
		$("#mysound").get(0).play();

	
		//if click again, then pause 
		if (source == myaudio) {
			console.log("yes")
			$("#mysound").get(0).pause();

			// Reset so you can click again
			$("#mysound").attr("src", "");
		} 
	});

	$("#gallery2 img").click(function(){

		var audioPlayer = document.getElementById("mysound");
		var source = audioPlayer.getAttribute("src");
		console.log(source);

		var bag = $(this).attr("num");
		var myaudio = audioList[bag];
		$("#mysound").attr("src", myaudio);
		$("#mysound").get(0).play();

	
		//if click again, then pause 
		if (source == myaudio) {
			console.log("yes")
			$("#mysound").get(0).pause();

			// Reset so you can click again
			$("#mysound").attr("src", "");
		} 
	});

	$("#gallery3 img").click(function(){

		var audioPlayer = document.getElementById("mysound");
		var source = audioPlayer.getAttribute("src");
		console.log(source);

		var bag = $(this).attr("num");
		var myaudio = audioList[bag];
		$("#mysound").attr("src", myaudio);
		$("#mysound").get(0).play();

	
		//if click again, then pause 
		if (source == myaudio) {
			console.log("yes")
			$("#mysound").get(0).pause();

			// Reset so you can click again
			$("#mysound").attr("src", "");
		} 
	});
}); //end document.ready block
