const sort = document.querySelector('#sort');
const filt = document.querySelector('#filt');

const dark = document.querySelector('.darkweb');
const pric = document.querySelector('.pric');
const design = document.querySelector('.design');

sort.addEventListener('click', () => {
    if(design.style.display === "inline") {
        design.style.display = "none";
    } else {
        design.style.display = "inline";
    }
});
filt.addEventListener('click', () => {
    if(dark.style.display === "inline") {
        dark.style.display = "none";
    } else {
        dark.style.display = "inline";
    }
    if(pric.style.display === "inline") {
        pric.style.display = "none";
    } else {
        pric.style.display = "inline";
    }
});
const burger = document.querySelector('.burger');
const ul = document.querySelector('.links');
const a = document.querySelector('.links li a');

burger.addEventListener('click', () => {
    if (ul.style.display === "inline") {
        ul.style.display = "none";
    } else {
        ul.style.display = "inline";
    }
});