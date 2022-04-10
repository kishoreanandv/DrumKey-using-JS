"use strict";
window.addEventListener("keydown", drumSound);

function drumSound(keyEvent) {
  //data-attribute selector
  const key = document.querySelector(`.key[data-key='${keyEvent.keyCode}']`);
  const audioTag = document.querySelector(
    `audio[data-key = '${keyEvent.keyCode}']`
  );
  // resetting audio from the start
  console.log(audioTag);
  if (audioTag) {
    audioTag.currentTime = 0;
    audioTag.play();
    key.classList.add("playing");
  } else if (!audioTag) {
    document.querySelector(".message").innerHTML =
      "Press Only displaying Keys 😓 ";
  } else {
    return;
  }
}

const keys = document.querySelectorAll(".key");
// for each and use callback function to remove added playing class name.
keys.forEach((key) => key.addEventListener("transitionend", removePlaying));

function removePlaying(keyEvent) {
  if (keyEvent.propertyName !== "transform") return;
  // console.log(this);
  this.classList.remove("playing");
}
