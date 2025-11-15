// const btn = document.querySelector(".btn");

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

const btn = document.getElementById('box')
let position = 0;
document.addEventListener('keydown', (event)=>{
    if(event.hey === 'ArrowRight'){
        position += 2
    }   if (event.hey === "ArrowLeft") {
      position -= 2;
    }
    Box.style.left = position+'px'
})