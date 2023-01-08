let output = document.getElementById('div');
let button = document.getElementById('button');
let countNum = 0


let count = () => {
    countNum++
    output.textContent = `${countNum}`
    console.log(countNum)
}

button.addEventListener("click", count);