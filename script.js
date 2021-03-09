const button = document.querySelector("#button")
const tooltip = document.querySelector(".tooltip")
const position = button.getBoundingClientRect()
const length = getComputedStyle(tooltip, null)

button.addEventListener("click", function (){
    tooltip.classList.toggle("show");
    tooltip.style.top = `calc(${position.top}px  + ${length.height} / 2)`
    tooltip.style.left = `calc(${position.left}px  - ${length.width} / 2 + 5px) `
})


// useful properties
// 1. el.getBoundingClientRect()
// 2. getComputedStyle(el, null)