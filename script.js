const container = document.querySelector("#container");
//add the grid divs
let n=16;
const na = document.getElementById("my-number");
na.addEventListener('input',(e)=>{
   console.log(container.childNodes.length);
   for (let i = 0; i < container.childNodes.length; i++) {
    container.removeChild(container.childNodes[i]);
    }
    n=e.target.value;
    console.log(0<e.target.value);
    for (let i = 0; i < n*n; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);}


        
//listening for mouse hover and updating the color
const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener('mouseover',() => {
        pixel.style.backgroundColor = "blue";
}));

// clearing by removing the style property that i added
const button = document.getElementById("button");
button.addEventListener('click', ()=> {
    pixels.forEach(pixel => {
        pixel.style.removeProperty("background-color");
        // console.log(pixel.style);
    });
});

});
// for (let i = 0; i < n*n; i++) {
// const pixel = document.createElement("div");
// pixel.classList.add("pixel");
// container.appendChild(pixel);
// }

