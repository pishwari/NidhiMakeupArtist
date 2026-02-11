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
<script>
  let slides = document.querySelectorAll(".carousel-slide");
  let current = 0;

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // Auto Slide
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000);
</script>
