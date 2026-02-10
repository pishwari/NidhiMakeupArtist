function toggleMenu(){
  document.getElementById("nav").classList.toggle("show");
}

function openLightbox(text){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightboxContent").innerText=text;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}

let slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index=(index+1)%slides.length;
  slides[index].classList.add("active");
},3000);
