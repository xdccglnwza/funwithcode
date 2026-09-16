const button = document.getElementById("a");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = randomRgbColor()
});

function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
