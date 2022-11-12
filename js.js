const bar = document.querySelector('#bar');
const close = document.querySelector('#close');

const nav = document.querySelector('#navlinks');


let nav_active = () => {
    nav.style.right= 0;
}

let nav_close = () => {
    nav.style.right=-320 + "px";
}

