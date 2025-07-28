const container = document.querySelector(".container")
const gridSize = 16

for (let i=0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement("div")
  gridItem.classList.add("grid-item")
  container.appendChild(gridItem);
};

// container.addEventListener("click", (e) => {
//   console.log(e.target)
// })
