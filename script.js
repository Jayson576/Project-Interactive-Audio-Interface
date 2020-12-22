$(document).ready(function () {
let playlist = [
	{src:'https://www.bensound.com//bensound-music/bensound-letitgo.mp3', title:"Let It Go By", artist:"Stereochipz"},
	{src:'https://www.bensound.com//bensound-music/bensound-thejazzpiano.mp3', title:"JazzPiano By", artist:"Benjamin Tissot"},
  {src:'https://www.bensound.com//bensound-music/bensound-whenyousmile.mp3', title:"When You Smile By", artist:"DpMusic"},
  {src:'https://www.bensound.com//bensound-music/bensound-vista.mp3', title:"Vista By", artist:"stereochipz"},
  {src:'https://www.bensound.com//bensound-music/bensound-thisweremember.mp3', title:"This We Remember By", artist:"Dan Phillipson"},
  {src:'https://www.bensound.com//bensound-music/bensound-resurgence.mp3', title:"Resurgence By", artist:"Anton Vlasov"},
  {src:'https://www.bensound.com//bensound-music/bensound-showoff.mp3', title:"Show Off By", artist:"Anton Vlasov"},
  {src:'https://www.bensound.com//bensound-music/bensound-wakemeup.mp3', title:"Wake Me Up By", artist:"Anton Vlasov"},
  {src:'https://www.bensound.com//bensound-music/bensound-hipjazz.mp3', title:"Hip Jazz By", artist:"Benjamin Tissot"},
  {src:'https://www.bensound.com//bensound-music/bensound-sunday.mp3', title:"Sunday By", artist:"Anton Vlasov"},
  
]
let whichSongAmIOn = 0
let isPlaying = false
let audio = null

artistname = $(".music-artist");
titlename = $(".music-title");
  
let playASong = function(whichSong) {
	let song = playlist[whichSong] 
	if (audio) { 
		audio.src = song.src 
		if (isPlaying) { audio.play() } 
	} else {
		audio = new Audio(song.src) 
	}
}

let pressedPlay = function() {
   
	if (isPlaying) {
 
		audio.pause()
		isPlaying = false
		play.textContent = `▶play`
    artistname.html(playlist[whichSongAmIOn].artist) 
titlename.html(playlist[whichSongAmIOn].title)
	} else {
     
    
		audio.play()
		isPlaying = true
		play.textContent = `Pause`
   artistname.html(playlist[whichSongAmIOn].artist)
    titlename.html(playlist[whichSongAmIOn].title)
	}
}



let play = document.querySelector(`#play`)
play.addEventListener(`click`, pressedPlay)

let pressedNext = function() {
 
  
	whichSongAmIOn = whichSongAmIOn + 1
	playASong(whichSongAmIOn)
   artistname.html(playlist[whichSongAmIOn].artist) 
titlename.html(playlist[whichSongAmIOn].title)
}

let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)

let pressedBack = function() {
   
	whichSongAmIOn = whichSongAmIOn - 1
	playASong(whichSongAmIOn)
  artistname.html(playlist[whichSongAmIOn].artist) 
titlename.html(playlist[whichSongAmIOn].title)
}
let back = document.querySelector(`#back`)
back.addEventListener(`click`, pressedBack)

playASong(0)


});
