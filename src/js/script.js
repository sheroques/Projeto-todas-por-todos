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
