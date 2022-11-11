const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const midWeek = document.querySelector("#mid-week");
const weekend = document.querySelector("#weekend");
const error = document.querySelector("#error");

function refreshPage () {
    window.location.reload();
}

btn.addEventListener("click", async function (e) {
   if (input.value <= "5" && input.value >= "1") {
       midWeek.classList.add("border-success");
   } else if (input.value > "5" || input.value <= "7") {
       weekend.classList.add("border-success");
   } else {
       error.innerHTML = "You entered an invalid number.";
   }
   e.preventDefault();
});