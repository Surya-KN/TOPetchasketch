// function clearchild(){
//     container.innerHTML="";
// }


// const container = document.querySelector("#container");
// //add the grid divs
// let n=16;
// for (let i = 0; i < n*n; i++) {
//     const pixel = document.createElement("div");
//     pixel.classList.add("pixel");
//     container.appendChild(pixel);
// }

// const na = document.getElementById("my-number");
// na.addEventListener('input',(e)=>{
    
//    clearchild();
//     n=e.target.value;
    
//     for (let i = 0; i < n*n; i++) {
//         const pixel = document.createElement("div");
//         pixel.classList.add("pixel");
//         container.appendChild(pixel);
//     }
//     container.style.width = n*10 + "px";
//     // clearing by removing the style property that i added
// const button = document.getElementById("button");
// button.addEventListener('click', ()=> {
//     pixels.forEach(pixel => {
//         pixel.style.removeProperty("background-color");
//         // console.log(pixel.style);
//     });
// });

// //listening for mouse hover and updating the color
// const pixels = document.querySelectorAll(".pixel");
// pixels.forEach(pixel => pixel.addEventListener('mouseover',() => {
//         pixel.style.backgroundColor = "blue";
// }));


// });

// /* for (let i = 0; i < n*n; i++) {
// const pixel = document.createElement("div");
// pixel.classList.add("pixel");
// container.appendChild(pixel);
// */

const container = document.querySelector("#container");
const na = document.getElementById("my-number");
const button = document.getElementById("button");
const body = document.querySelector(".body");
const color = document.getElementById("favcolor");
// Function to clear child elements of the container
function clearchild() {
    container.innerHTML = "";
}

// Function to create the initial grid of pixels
function createPixelsGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
    container.style.width = size * 10 + "px";
    container.style.height = size * 10 + "px";
    if(size < 16) size = 16;
    body.style.height = (size * 10) + 40 + "px"
}

// Initial grid creation
na.setAttribute("value","16");
createPixelsGrid(na.value);

// Function to set up event listeners for pixels
function setupPixelListeners(color) {
    const pixels = document.querySelectorAll(".pixel");
    
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = color;
        });
    });
}

// Event listener for changing the grid size
na.addEventListener('input', (e) => {
    clearchild();
    let newSize = parseInt(e.target.value,10);
    if(newSize>55) newSize=55;
    if(newSize<1) newSize=1;
    createPixelsGrid(newSize);
    setupPixelListeners(color.value); // Set up listeners for new pixels
});
color.addEventListener('input', (e) => {
    const newColor = e.target.value;
    setupPixelListeners(newColor); // Set up listeners for new pixels
});

// Event listener for the Clear button
button.addEventListener('click', () => {
    const pixels = document.querySelectorAll(".pixel");
    
    pixels.forEach(pixel => {
        pixel.style.removeProperty("background-color");
    });
});

// Initial setup of pixel listeners
setupPixelListeners(color.value);

