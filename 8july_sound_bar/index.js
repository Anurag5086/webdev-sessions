const btn = document.querySelectorAll(".btn");

const stopSounds = () => {
  btn.forEach((button) => {
    const sound = document.getElementById(button.innerText);
    sound.pause();
    sound.currentTime = 0;
  });
};

btn.forEach((button) => {
  button.addEventListener("click", () => {
    stopSounds();
    document.getElementById(button.innerText).play();
  });
});
