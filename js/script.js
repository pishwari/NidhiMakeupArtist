function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
