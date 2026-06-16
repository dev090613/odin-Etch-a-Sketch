let num = 16;
const container = document.querySelector(".sketchpad")

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    const newDiv = document.createElement("div")
    // newDiv.style.minWidth = (`calc(100vw / ${num})`)
    newDiv.classList.add("item")
    newDiv.style.width = `${100 / num}%`;

    container.appendChild(newDiv)
  }
}


