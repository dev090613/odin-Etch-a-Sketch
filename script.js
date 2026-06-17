const container = document.querySelector(".sketchpad")
let currentMode = 'color';
let currentColor = "#454545";
let currentBackgroundColor = '#ededed'
let num = 16;

const slider = document.querySelector("#sizeSlider")
slider.addEventListener("change", (e) => {
  clear();
  num = e.target.value;
  drawItems(num);
})

drawItems(num);

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
})


const displayText = document.querySelector(".slider-value")
slider.addEventListener("input", (e) => {
  const text = e.target.value;
  displayText.textContent = `${text} X ${text}`;
})

let btns = [...document.querySelectorAll('.btn')];
btns.forEach( (btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target.style)
    btns.forEach( (btn) => btn.style.backgroundColor = "#ededed" )
    if (e.target.dataset["mode"] === "clear") {
      drawItems(num);
      e.target.style.backgroundColor = "skyblue"
      currentMode = 'eraser';
    } else {
      currentMode = e.target.dataset["mode"]
      e.target.style.backgroundColor = "skyblue"
    }
  })
})

function drawItems(num) {
  clear()
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const newDiv = document.createElement("div")
      // newDiv.style.minWidth = (`calc(100vw / ${num})`)
      newDiv.classList.add("item")
      newDiv.style.width = `${100 / num}%`;
      newDiv.addEventListener('mouseenter', (e) => {
        if (e.buttons !== 1)
          return ;

        if (currentMode === "rainbow") {
          const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          currentColor = randomColor;
        } else if (currentMode === "eraser") {
          currentColor = "white";
        } else if (currentMode === "color") {
          currentColor = colorPicker.value;
        }
        e.target.style.backgroundColor = currentColor;
      })
      container.appendChild(newDiv)
    }
  }
}

function clear() {
  container.innerHTML = '';
}
