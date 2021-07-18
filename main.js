const btns = document.querySelectorAll(".action");
const texts = document.querySelectorAll(".card-text");
const btnCachers = document.querySelectorAll(".btn-red");

console.log(texts);
btns.forEach((btn) => {
  texts.forEach((text) => {
    btn.addEventListener("click", () => {
      btn.classList.add("hiden");
      text.classList.add("visible");
    });
  });
});

btnCachers.forEach((btnC) => {
  texts.forEach((text) => {
    btnC.addEventListener("click", () => {
      text.classList.remove("visible");
      text.classList.add("hiden");
    });
  });
  btns.forEach((btn) => {
    btnC.addEventListener("click", () => {
      btn.classList.remove("hiden");
    });
  });
});
