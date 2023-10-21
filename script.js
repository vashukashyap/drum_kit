document.addEventListener("keypress", (e) => {
  if (e.key == "b") {
    let drum = document.querySelector("#drum");
    drum.src = "./images/drumplay.svg";
    const drumplay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"
    );
    drumplay.play();
    setTimeout(() => {
      drum.src = "./images/drum.svg";
    }, 100);
  }
  if (e.key == "v") {
    let drum = document.querySelector("#drum");
    drum.src = "./images/drumplay.svg";
    const drumplay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav"
    );
    drumplay.play();
    setTimeout(() => {
      drum.src = "./images/drum.svg";
    }, 100);
  } else if (e.key == "f") {
    let smd1 = document.querySelector("#smd-1");
    smd1.classList.add("smd1-anim");
    const smalldrumplay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav"
    );
    smalldrumplay.play();
    setTimeout(() => {
      smd1.classList.remove("smd1-anim");
    }, 100);
  } else if (e.key == "h") {
    let smd2 = document.querySelector("#smd-2");
    smd2.classList.add("smd2-anim");
    const smalldrumplay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav"
    );
    smalldrumplay.play();
    setTimeout(() => {
      smd2.classList.remove("smd2-anim");
    }, 100);
  } else if (e.key == "d") {
    let plateleft = document.querySelector("#drumplateleft-1");
    plateleft.classList.add("plate-shake");
    const plateRightPlay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav"
    );
    plateRightPlay.play();
    setTimeout(() => {
      plateleft.classList.remove("plate-shake");
    }, 150);
  } else if (e.key == "s") {
    let plateleft = document.querySelector("#drumplateleft-2");
    plateleft.classList.add("plate-shake");
    const plateRightPlay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav"
    );
    plateRightPlay.play();
    setTimeout(() => {
      plateleft.classList.remove("plate-shake");
    }, 150);
  } else if (e.key == "u") {
    let plateleft = document.querySelector("#drumplateright-1");
    plateleft.classList.add("plate-shake");
    const plateRightPlay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav"
    );
    plateRightPlay.play();
    setTimeout(() => {
      plateleft.classList.remove("plate-shake");
    }, 150);
  } else if (e.key == "i") {
    let plateleft = document.querySelector("#drumplateright-1");
    plateleft.classList.add("plate-shake");
    const plateRightPlay = new Audio(
      "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav"
    );
    plateRightPlay.play();
    setTimeout(() => {
      plateleft.classList.remove("plate-shake");
    }, 150);
  }
});
