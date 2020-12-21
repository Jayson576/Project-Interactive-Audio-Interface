let playlist = [
	{src:'https://www.bensound.com//bensound-music/bensound-letitgo.mp3', title:"Letitgo", artist:"stereochipz"},
	{src:'https://www.bensound.com//bensound-music/bensound-thejazzpiano.mp3', title:"JazzPiano", artist:"Benjamin Tissot"},
  {src:'https://www.bensound.com//bensound-music/bensound-whenyousmile.mp3', title:"When You Smile", artist:"DpMusic"},
  {src:'https://www.bensound.com//bensound-music/bensound-vista.mp3', title:"Vista", artist:"stereochipz"},
  {src:'https://www.bensound.com//bensound-music/bensound-thisweremember.mp3', title:"This We Remember", artist:"Dan Phillipson"},
  {src:'https://www.bensound.com//bensound-music/bensound-resurgence.mp3', title:"Resurgence", artist:"Anton Vlasov"},
  {src:'https://www.bensound.com//bensound-music/bensound-showoff.mp3', title:"Show off", artist:"Anton Vlasov"},
  {src:'https://www.bensound.com//bensound-music/bensound-wakemeup.mp3', title:"wake me up", artist:"Anton Vlasov"},
  {src:'https://www.bensound.com//bensound-music/bensound-hipjazz.mp3', title:"Hip Jazz", artist:"Benjamin Tissot"},
  {src:'https://www.bensound.com//bensound-music/bensound-sunday.mp3', title:"Sunday", artist:"Anton Vlasov"},
  
]
let whichSongAmIOn = 0
let isPlaying = false
let audio = null
let playASong = function(whichSong) {
	let song = playlist[whichSong] 
	if (audio) { 
		audio.src = song.src 
		if (isPlaying) { audio.play() } 
	} else {
		audio = new Audio(song.src) 
	}
  document.getElementById("trackImage").src = playlist[pickASong].image
 document.getElementById("songArtist").innerHTML = `{playlist[pickASong].artist}`
 document.getElementById("songTitle") .innerHTML = `{playlist[pickASong].title}`
}

let pressedPlay = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false
		play.textContent = `▶play`
	} else {
		audio.play()
		isPlaying = true
		play.textContent = `Pause`
	}
}



let play = document.querySelector(`#play`)
play.addEventListener(`click`, pressedPlay)

let pressedNext = function() {
	whichSongAmIOn = whichSongAmIOn + 1
	playASong(whichSongAmIOn)
}

let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)

let pressedBack = function() {
	whichSongAmIOn = whichSongAmIOn - 1
	playASong(whichSongAmIOn)
}
let back = document.querySelector(`#back`)
back.addEventListener(`click`, pressedBack)

playASong(0)
