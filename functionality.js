// javascript file that set the functionality of some of the components in the index.html file
// imported to the index.html file via the <script> tag in the end of the body part  

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ scroll back to top button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// javascript code was taken from https://mdbootstrap.com/docs/standard/extended/back-to-top/
//Get the button
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};
function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ dropdown menu ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function () {
    $('#myDropdown .dropdown-menu').on({
"click":function(e){
  e.stopPropagation();
}
});
$('.closer').on('click', function () {
$('.btn-group').removeClass('open');
});
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ image slider ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const myRange = document.querySelector('#myRange')
const txtchange = document.querySelector('#txtChange')
const imgchange = document.querySelector('#imgChange')
const texts = [
'First Image', 
'Second Image', 
'Third Image', 
'Fourth Image'
]
const sources = [
  "./resources/dropdown/dropdown3/1.png",
  "./resources/dropdown/dropdown3/2.png",
  "./resources/dropdown/dropdown3/3.png",
  "./resources/dropdown/dropdown3/4.png",
]

function updateImagesAndText() {
  txtchange.textContent = texts[myRange.value - 1];
  imgchange.src = sources[myRange.value - 1];
}

myRange.addEventListener('input', () => {
  txtchange.textContent = texts[myRange.value - 1];
  imgchange.src = sources[myRange.value - 1];
});

const myRange2 = document.querySelector('#myRange2')
const imgchange2 = document.querySelector('#imgChange2')
const sources2 = [
  "./resources/dropdown/dropdown2/1.png",
  "./resources/dropdown/dropdown2/2.png",
  "./resources/dropdown/dropdown2/3.png",
  "./resources/dropdown/dropdown2/4.png",
]

function updateImages2() {
  imgchange2.src = sources2[myRange2.value - 1];
}

myRange2.addEventListener('input', () => {
  imgchange2.src = sources2[myRange2.value - 1];
});

window.addEventListener('load', () => {
updateImagesAndText();
updateImages2();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ before and after image slider ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // javascript code was taken from https://www.codehim.com/vanilla-javascript/before-after-image-slider-in-vanilla-javascript/
let active = false;
// event listeners
// clicks on scroller
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
  // add scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller').classList.add('scrolling');
});
// moving around
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
// releasing click
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
// mouse move
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // mouse location relative to container-ba-slider
  let x = e.pageX;
  x -= document.querySelector('.container-ba-slider').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.container-ba-slider').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

// initial opening state  
scrollIt(150);

// repeat the process for touch events
document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
