let websites = document.querySelectorAll(".front-end-imgs");
console.log(websites[0]);

websites[0].onclick = ()=>{
    location.href = "https://motaajj.github.io/putchilli-coffee/home"
};
websites[1].onclick = ()=>{
    location.href = "https://motaajj.github.io/calculeter/cal.html"
};
websites[2].onclick = ()=>{
    location.href = "https://motaajj.github.io/Body-Masters/fitnes.html"
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let listIcon = document.querySelector(".list-icon");
let sideBar = document.querySelector(".side-bar");

listIcon.onclick = ()=>{
  sideBar.style.display = "block";
        sideBar.style.transition = "all 1s 0s linear";

}

sideBar.onmouseleave = ()=>{
      sideBar.style.display = "none";
      sideBar.style.transition = "all 1s 0s linear";


}

let frontEnd = document.getElementsByTagName("li")[0];
let frontEnd2 = document.getElementsByTagName("li")[4];


let uiUx = document.getElementsByTagName("li")[1];
let uiUx2 = document.getElementsByTagName("li")[5];


let certefecate = document.getElementsByTagName("li")[2];
let certefecate2 = document.getElementsByTagName("li")[6];


let info = document.getElementsByTagName("li")[3];
let info2 = document.getElementsByTagName("li")[7];



frontEnd.onclick = ()=>{
window.scrollTo({
  top: 1150,
  behavior: "smooth",
});
}

frontEnd2.onclick = ()=>{
window.scrollTo({
  top: 1150,
  behavior: "smooth",
});
}


uiUx.onclick = ()=>{
window.scrollTo({
  top: 550,
  behavior: "smooth",
});
}

uiUx2.onclick = ()=>{
window.scrollTo({
  top: 550,
  behavior: "smooth",
});
}

certefecate.onclick = ()=>{
window.scrollTo({
  top: 2100,
  behavior: "smooth",
});
}

certefecate2.onclick = ()=>{
window.scrollTo({
  top: 2100,
  behavior: "smooth",
});
}

info.onclick = ()=>{
window.scrollTo({
  top: 2700,
  behavior: "smooth",
});
}

info2.onclick = ()=>{
window.scrollTo({
  top: 2700,
  behavior: "smooth",
});
}

let scrollButton = document.querySelector(".back-top");


window.addEventListener(`scroll`,function(){

if(window.scrollY > 200){
scrollButton.style.visibility = "visible";

} else {
  scrollButton.style.visibility = "hidden";

}
})


scrollButton.onclick = ()=>{
  window.scroll({
    behavior:"smooth",
    top:0
  })
}