const balloon = document.getElementById("circle");

balloon.style.width = `200px`;
balloon.style.height = `200px`;

var count = 0;
balloon.addEventListener("click", () => {
  order = ["green", "blue", "black", "red"];
  let width = parseInt(balloon.style.width);
  let height = parseInt(balloon.style.height);
  width += 20;
  height += 20;
  balloon.style.width = `${width}px`;
  balloon.style.height = `${height}px`;
  balloon.style.backgroundColor = order[count];
  count++;
  if (count > 3) {
    count = 0
  }
  if (width >= 420) {
    balloon.style.width = `200px`;
    balloon.style.height = `200px`;
    balloon.style.backgroundColor = "red";
    count = 0;
  }
});
