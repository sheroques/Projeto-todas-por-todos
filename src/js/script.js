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
const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['./src/assets/images/4d44820a-1eb8-4cd8-897a-f1b6fc892f71.jpg', './src/assets/images/be26ba5d-7e48-4bfb-a999-c747ef263377.jpg', './src/assets/images/PHOTO-2023-09-04-08-43-58(1).jpg','./src/assets/images/IMG_4350.JPG'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

function donateProcess() {
  var valor = document.getElementById("valor").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;

  if (valor <= 0 || email.trim() === "") {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  var formattedValue = parseFloat(valor).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  var data = {
    valor: `R$${formattedValue}`, // foi feito desta maneira porque o tolocalestring estava devolvendo caracteres indesejados
    nome,
    email,
  };

  // Conf AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://enqvbcorviyeb.x.pipedream.net", true); // usar o site requestbin e trocar a url para receber os dados
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Obrigado por sua doação, " + nome + "!");
      document.getElementById("doacaoForm").reset();
    } else {
      console.error("Erro ao processar a doação:", xhr.statusText);
    }
  };

  xhr.send(JSON.stringify(data));
}
//função do checkbox do pop-up de termos de uso para ser voluntario
function handleShowPopUp() {
  var popup = document.getElementById("pop_up");

  popup.style.display = "flex";
}

function handleHidePopUp() {
  var popup = document.getElementById("pop_up");
  var checkbox = document.getElementById("checkbox");

  checkbox.checked = true;

  popup.style.display = "none";
}

//função que vai redirecionar para as redes sociais

function redirectFacebook() {
  window.location.href =
    "https://www.facebook.com/profile.php?id=100089227661691&mibextid=LQQJ4d";
}

function redirectInstagram() {
  window.location.href =
    "https://instagram.com/todasportodos?igshid=MzMyNGUyNmU2YQ==";
}

function redirectTikTok() {
  window.location.href =
    "https://www.tiktok.com/@todasportodos?_t=8hkNz29Jazt&_r=1";
}

function redirectWhatsapp() {
  window.location.href = "https://chat.whatsapp.com/KKxqivG2NCUG9W3FLQvHhB";
}
