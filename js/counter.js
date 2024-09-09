const span = document.querySelector(".span");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
let count = 0;
decrease.addEventListener("click", function () {
  count--;
  span.textContent = count;
  color();
});
increase.addEventListener("click", function () {
  count++;
  span.textContent = count;
  color();
});
reset.addEventListener("click", function () {
  count = 0;
  span.textContent = count;
  color();
});
function color() {
  if (count > 0) {
    span.style.color = "green";
  } else if (count < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "black";
  }
}
