const about = document.querySelector("#radio-premium");
const contact = document.querySelector("#radio-extra1");
const certificates = document.querySelector("#radio-extra2");
const education = document.querySelector("#radio-basic");
const home = document.querySelector("#radio-free");
let dekstop = document.querySelector(".dekstop");


// //mobile layout 
// document.querySelector(".menu-btn").addEventListener("click", () => {
//   document.querySelector(".nav-links").classList.toggle("active");
// });


















const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
});






let op1 = document.querySelector("#op1");
let op2 = document.querySelector("#op2");
let op3 = document.querySelector("#op3");
let op4 = document.querySelector("#op4");

let close = document.querySelector("#close");
let close1 = document.querySelector("#close1");
let close2 = document.querySelector("#close2");
let close3 = document.querySelector("#close3");


home.addEventListener("click", () => {
    op3.style.display = "none";
    op4.style.display = "none";
    op2.style.display = "none";
    op1.style.display = "none";
});



education.addEventListener("click", () => {
    op3.style.display = "none";
    op4.style.display = "none";
    op2.style.display = "none";
    op1.style.display = "block";
});

close.addEventListener("click", () => {
    op1.style.display = "none";
});




about.addEventListener("click", () => {
  op1.style.display = "none";
  op3.style.display = "none";
  op4.style.display = "none";
  op2.style.display = "block";
});
close1.addEventListener("click", () => {
  op2.style.display = "none";
});




contact.addEventListener("click", () => {
    op1.style.display = "none";
    op4.style.display = "none";
    op2.style.display = "none";
    op3.style.display = "block";
});
close2.addEventListener("click", () => {
  op3.style.display = "none";
});





certificates.addEventListener("click", () => {
    op1.style.display = "none";
    op3.style.display = "none";
    op2.style.display = "none";
    op4.style.display = "block";
});
close3.addEventListener("click", () => {
  op4.style.display = "none";
});
