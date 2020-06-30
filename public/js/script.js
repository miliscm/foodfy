const cards = document.querySelectorAll(".card");
// const modalOverlay = document.querySelector(".modal");

const tamanho = cards.length;
for (let i = 0; i < tamanho; i++) {
  // for (let card of cards) {
  cards[i].addEventListener("click", function () {
    const index = i;
    window.location.href = `/recipes/${index}`;
    // modalOverlay.classList.add("active");
    // const idImg = card.getAttribute("id");
    // modalOverlay.querySelector("img").src = `./assets/${idImg}.png`;

    // const contentTitulo = card.getElementsByTagName("h3")[0].innerText;
    // const content = card.getElementsByTagName("p")[0].innerText;
    // modalOverlay.getElementsByTagName("h2")[0].innerText = contentTitulo;
    // modalOverlay.getElementsByTagName("p")[0].innerText = content;
  });
}
const botoes = document.querySelectorAll(".sub-title h2");

for (let botao of botoes) {
  botao.addEventListener("click", function () {
    botao.classList.toggle("active");
    if (botao.classList == "active") {
      botao.nextElementSibling.classList.add("hidden");
    } else {
      botao.nextElementSibling.classList.remove("hidden");
    }
  });
}
