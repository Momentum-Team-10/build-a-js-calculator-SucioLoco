let currentValues = []
let buttons = document.querySelectorAll(".action-button")
let equal = document.querySelector(".equal")
let display = document.querySelector(".current-output")
let clear = document.querySelector(".clear")

for (let button of buttons){
	button.addEventListener("click", function(){
  	currentValues.push(button.innerText)
    display.innerText = currentValues.join("")
    console.log(currentValues)
  });
}

equal.addEventListener("click", function(){
	let outputValue = currentValues.join("")
  console.log(outputValue)
  console.log(eval(outputValue))
  display.innerText = eval(outputValue)
  currentValues = []
})

clear.addEventListener("click", function(){
	let outputValue = currentValues = []
    display.innerText = outputValue
  
})