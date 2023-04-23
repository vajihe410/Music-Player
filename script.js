const track = document.getElementById("track");
const banner = document.getElementById("banner");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
trackIndex = 0;
tracks = [
  "./audio/Maher-Zain---For-the-Rest-of-My-Life.mp3",
  "./audio/Zaz--Je-veux.mp3"
];
banners = [
  "./image/Zain.jpg",
  "./image/ZAZ.jpg"
];
trackArtists = ["Maher Zain", "Zaz"];
trackTitles = ["For the rest of my life", "Je veux"];
let playing = true;

function pausePlay() {

  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";
    track.play();
    thumbnail.style.AnimationPlayState="runing"; 
    playing = false;
    
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    thumbnail.style.AnimationPlayState="paused";
    track.pause();
    playing = true;
    
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);
track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }
  track.src = tracks[trackIndex];
  banner.src = banners[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];
  playing = true;
  pausePlay();
}
next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }
  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];
  playing = true;
  pausePlay();
}



prev.addEventListener("click", prevTrack);
function progressValue() {
  progressBar.max = track.duration;
  progressBar.value = track.currentTime;
  currentTime.textContent = formatTime(track.currentTime);
  durationTime.textContent = formatTime(track.duration);
}
setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);