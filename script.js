// =========================
// AOS INIT
// =========================
AOS.init({
  duration: 1200,
  once: true
});

// =========================
// ELEMENTS
// =========================
const intro = document.getElementById("intro-screen");
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// =========================
// SAFETY: FORCE PAGE TO TOP ON LOAD
// (THIS FIXES YOUR MAIN ISSUE)
// =========================
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

// =========================
// VOLUME
// =========================
music.volume = 0.25;

// =========================
// INTRO CLICK START
// =========================
intro.addEventListener("click", () => {

  // FORCE SCROLL RESET (IMPORTANT FIX)
  window.scrollTo(0, 0);

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";

    // SECOND SCROLL RESET AFTER LAYOUT STABILIZES
    window.scrollTo(0, 0);

  }, 1000);

  music.play().catch(() => {
    console.log("Autoplay blocked");
  });

});

// =========================
// MUSIC BUTTON
// =========================
musicBtn.addEventListener("click", () => {

  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '<span class="music-icon">♫</span>';
  } else {
    music.pause();
    musicBtn.innerHTML = '<span class="music-icon">✕</span>';
  }

});

// =========================
// SCROLL BAR
// =========================
window.addEventListener("scroll", () => {

  let scrollTop = document.documentElement.scrollTop;

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width =
    progress + "%";

});

// =========================
// LIGHTBOX
// =========================
const images = document.querySelectorAll(".photo-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

images.forEach(img => {

  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });

});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});