let num = 16;
const container = document.querySelector(".container")

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    const div = document.createElement("div")
    div.style.minWidth = (`calc(100vw / ${num})`)
    div.style.aspectRatio = "1 / 1";

    div.classList.add("item")
    container.appendChild(div)
  }
}


