const container = document.querySelector(".container")
const gridSize = 16
const WIDTH = 960;
const HEIGHT = 960;

container.addEventListener("mouseover", (e) => {
  const target = e.target.closest(".grid-item")
  if (target) {
    // console.log(target.style)
    target.classList.add("grid-hovered")
  }
})

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  const userInput 
    = prompt("한 변에 들어갈 그리드의 갯수를 입력해주세요?")

  if ((userInput ==="") || (userInput === null)) {
    alert("1 이상 100 이하의 숫자를 입력해주세요.")
    return;
  }
  const gridSize = parseInt(userInput);
  if (gridSize > 100) {
    alert("100 이하의 숫자를 입력해주세요");
    return;
  } else if (gridSize < 1) {
    alert("1 이상의 숫자를 입력해주세요.")
    return;
  }

  drawGrid(gridSize);
})

function drawGrid(gridSize) {
  container.innerHTML = ''
  const basis = (100 / gridSize)
  const height = (WIDTH / gridSize)
  
  for (let i=0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div")
    gridItem.classList.add("grid-item")
    gridItem.style.flexBasis = `${basis}%`
    gridItem.style.height = `${height}px`
    container.appendChild(gridItem);
  };
}

drawGrid(16);
