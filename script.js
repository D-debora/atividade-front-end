// CARROSSEL 3D
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  coverflowEffect: { rotate:0, stretch:500, depth:350, modifier:1.2, slideShadows:false }
});

// POP-UP LOGIN
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", ()=>{ loginPopup.style.display="flex"; });
closeLogin.addEventListener("click", ()=>{ loginPopup.style.display="none"; });
window.addEventListener("click", (e)=>{ if(e.target===loginPopup) loginPopup.style.display="none"; });

const commentsList = document.getElementById("commentsList");