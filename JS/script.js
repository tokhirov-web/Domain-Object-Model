let colorName = document.querySelector(".specialColor")
let blue = document.querySelector(".blue")
let purple = document.querySelector(".purple")
let yellow = document.querySelector(".yellow")
let midnight = document.querySelector(".midnight")
let starlight = document.querySelector(".starlight")
let red = document.querySelector(".red")
let picture = document.querySelector(".specialPicture")

blue.onmouseenter = () => {
    colorName.innerHTML = "Blue"
}

purple.onmouseenter = () => {
    colorName.innerHTML = "Purple"
}

yellow.onmouseenter = () => {
    colorName.innerHTML = "Yellow"
}

midnight.onmouseenter = () => {
    colorName.innerHTML = "Midnight"
}

starlight.onmouseenter = () => {
    colorName.innerHTML = "Starlight"
}

red.onmouseenter = () => {
    colorName.innerHTML = "Red"
}
