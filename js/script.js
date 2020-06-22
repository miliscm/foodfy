const cards = document.querySelectorAll(".card");
const modalOverlay = document.querySelector(".modal");

for (let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");
    const idImg = card.getAttribute("id");
    modalOverlay.querySelector("img").src = `./assets/${idImg}.png`;

    const contentTitulo = card.getElementsByTagName("h3")[0].innerText;
    const content = card.getElementsByTagName("p")[0].innerText;
    modalOverlay.getElementsByTagName("h2")[0].innerText = contentTitulo;
    modalOverlay.getElementsByTagName("p")[0].innerText = content;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
