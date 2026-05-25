const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
});


const cards = document.querySelectorAll(".menu-item, .wine-card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});


cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.8s ease";
});