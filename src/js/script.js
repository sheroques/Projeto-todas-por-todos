//função de esonder sidebar
function toggleSidebar() {
  var sidebarContainer = document.getElementById("ui-sidebar");
  if (sidebarContainer.classList.contains("hidden")) {
    sidebarContainer.classList.remove("hidden");
  } else {
    sidebarContainer.classList.add("hidden");
  }
}

//funcionalidade da slider
const slider = document.querySelector(".gallery");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

//função do checkbox do pop-up de termos de uso para ser voluntario
function handleShowPopUp() {
  var popup = document.getElementById('pop_up')

  popup.style.display = 'flex'
}

function handleHidePopUp() {
  var popup = document.getElementById('pop_up')
  var checkbox = document.getElementById('checkbox')

  checkbox.checked = true

  popup.style.display = 'none'
}

//função que vai redirecionar para as redes sociais

function redirectFacebook (){
  window.location.href='https://www.facebook.com/profile.php?id=100089227661691&mibextid=LQQJ4d'
}

function redirectInstagram(){
  window.location.href='https://instagram.com/todasportodos?igshid=MzMyNGUyNmU2YQ=='
}

function redirectTikTok(){
  window.location.href='https://www.tiktok.com/@todasportodos?_t=8hkNz29Jazt&_r=1'
}

function redirectWhatsapp(){
  window.location.href='https://chat.whatsapp.com/KKxqivG2NCUG9W3FLQvHhB'
}

