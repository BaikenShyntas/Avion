const burger = document.querySelector('.burger');
const ul = document.querySelector('.hipper');
const a = document.querySelector('.hipper li a');

burger.addEventListener('click', () => {
    if (ul.style.display === "inline") {
        ul.style.display = "none";
    } else {
        ul.style.display = "inline";
    }
});