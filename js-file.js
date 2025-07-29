const container = document.querySelector(".container")
const gridSize = 16

for (let i=0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement("div")
  gridItem.classList.add("grid-item")
  container.appendChild(gridItem);
};

container.addEventListener("mouseover", (e) => {
  const target = e.target.closest(".grid-item")
  if (target) {
    target.classList.add("grid-hovered")
  }
})
