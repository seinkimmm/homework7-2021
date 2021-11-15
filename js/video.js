

var video = document.querySelector('video');


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.getElementById('play').onclick = function()
{

   video.play();
   console.log("Play Video");
}
document.getElementById('pause').onclick = function()
{

	video.pause();
	console.log("Pause Video");
}
document.getElementById('slower').onclick = function()
{

	video.playbackRate = video.playbackRate*.95;
	console.log("New Speed is " + video.playbackRate);

}
document.getElementById('faster').onclick = function()
{

	video.playbackRate = video.playbackRate*(1/.95);
	console.log("New Speed is " + video.playbackRate);
}
document.getElementById('skip').onclick = function()
{
	console.log("Original Location " + video.currentTime);
	video.currentTime += 15
	if (video.currentTime >= video.duration){
		video.currentTime = 0
		console.log("Going Back to the Beginning");
	}
	console.log("New Location " + video.currentTime);

}
document.getElementById('vintage').onclick = function(){

	video.classList.add("oldSchool");
}
document.getElementById('orig').onclick = function(){

	video.classList.remove("oldSchool");
}
var slider = document.getElementById('slider');
var volume = document.getElementById('volume');
volume.innerHTML = "100%";
slider.oninput = function() {
	volume.innerHTML = this.value + "%";
	video.volume = this.value/100;
	console.log(this.value/100)
}

var mute = document.getElementById('mute')
document.getElementById('mute').onclick = function()
{
	if (video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
	
}

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

