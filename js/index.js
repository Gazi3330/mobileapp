document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".item01, .item02");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("reveal");
    }, index * 100);
  });
});
