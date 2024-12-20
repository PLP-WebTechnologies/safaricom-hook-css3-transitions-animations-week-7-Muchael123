function calculateArea(length, width) {
    return length * width;
}

let globalVar = "I am a global variable";

function demoScope() {
    let localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar);
}

function toggleAnimation() {
    const card = document.querySelector('.card');
    card.classList.toggle('toggle-animation');
}

console.log("Area of rectangle: " + calculateArea(10, 5));
