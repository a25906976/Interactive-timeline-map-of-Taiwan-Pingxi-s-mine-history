const button = document.querySelector(".button");
const charts = document.querySelector(".charts");

button.addEventListener("click", (e) => {
  console.log("click");
  charts.classList.toggle("notShow");
});
