const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const monday = document.querySelector("#mo");
const tuesday = document.querySelector("#tu");
const wednesday = document.querySelector("#we");
const thursday = document.querySelector("#th");
const friday = document.querySelector("#fr");
const saturday = document.querySelector("#sa");
const sunday = document.querySelector("#su");
const error = document.querySelector("#error");

btn.addEventListener("click", function (e) {
    if (input.value === "1") {
        monday.classList.add("border-success");
    } else if (input.value === "2") {
        tuesday.classList.add("border-success");
    } else if (input.value === "3") {
        wednesday.classList.add("border-success");
    } else if (input.value === "4") {
        thursday.classList.add("border-success");
    } else if (input.value === "5") {
        friday.classList.add("border-success");
    } else if (input.value === "6") {
        saturday.classList.add("border-success");
    } else if (input.value === "7") {
        sunday.classList.add("border-success");
    } else {
        error.innerHTML = "You entered an invalid number.";
    }
    e.preventDefault();
});

function refreshPage () {
    window.location.reload();
}