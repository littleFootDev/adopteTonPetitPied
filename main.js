const btns = document.querySelectorAll(".action");
const texts = document.querySelectorAll(".card-text");
const btnCachers = document.querySelectorAll(".btn-red");

for (let i = 0; i < btns.length; i++) {
  for (let j = 0; j < texts.length; j++) {
    let btn = btns[i];
    let text = texts[j];
    btn.addEventListener("click", () => {
      if (i === j) {
        btn.classList.add("hiden");
        text.classList.toggle("visible");
      }
    });
  }
}
for (let i = 0; i < btnCachers.length; i++) {
  for (let j = 0; j < texts.length; j++) {
    let btnC = btnCachers[i];
    let text = texts[j];
    btnC.addEventListener("click", () => {
      if (i === j) {
        text.classList.toggle("visible");
      }
    });
  }
  for (let e = 0; e < btns.length; e++) {
    let btn = btns[e];
    let btnC = btnCachers[i];
    btnC.addEventListener("click", () => {
      if (i === e) {
        btn.classList.remove("hiden");
      }
    });
  }
}
