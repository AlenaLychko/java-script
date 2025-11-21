// // const btn = document.querySelector(".btn");

// // const fu = function(){
// // expression
// // }
// document.addEventListener("keydown", (event) => {
// console.log(event);
//     event.preventDefault()
//     if((event.ctrlKey || event.metaKey) && event.code==='KeyS'){
//         console.log('як не з такої сім*ї як другі, я з БОГАТОЇ')
//     }
// //   console.log(event.key);
// //   console.log(event.code);
// });

// const btn = document.getElementById('box')
// let position = 0;
// document.addEventListener('keydown', (event)=>{
//     if(event.hey === 'ArrowRight'){
//         position += 2
//     }   if (event.hey === "ArrowLeft") {
//       position -= 2;
//     }
//     Box.style.left = position+'px'
// })

// const starus = document.getElementById("status");
// const elementKey = document.getElementById("key");
// const restart = document.getElementById("restart");

// let currentIndex = 0;

// function start() {
//   currentIndex = 0;
//   elementKey.textContent = keys[currentIndex];
// }

// document.addEventListener("keydown", (event) => {
//   const letter = event.key.toLowerCase();
//   if (letter === keys[currentIndex]) {
//     starus.textContent = "Bірно!";
//     currentIndex += 1;
//     if (currentIndex < keys.length) {
//       elementKey.textContent = keys[currentIndex];
//     } else {
//       status.textContent = `Congrats!! You won.`;
//       elementKey.textContent = "I don*t have any letters left";
//     }
//   } else {
//     elementKey.textContent = `You pressed something wrong ${event.key}`;
//   }
// });

// //мишка
// const box = document.getElementById("box");
// document.addEventListener("mousemove", (event) => {
//   const mouseX = event.clinetX;
//   const mouseY = event.clinetY;

//   const rect = box.getBoundingClientRect(); //отримує інфу про об*ект топ боттом и тд
//   // console.log(rect)
//   const boxCenterX = rect.left + rect.width / 2;
//   const boxCenterY = rect.top + rect.height / 2;

//   box.style.left = box.offsetLeft + mouseX - boxCenterX + "px";
//   box.style.top = box.offsetTop + mouseY - boxCenterY + "px";
// });
//canvas
const canvas = document.getElementById("drawArea");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "red";
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});