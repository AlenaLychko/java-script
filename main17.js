// const title = document.createElement("h1"); //можемо створювати елемент
// title.textContent = "Header";
// console.log(title);

// const { createElement } = require("react");

// const picture = document.createElement('img')
// picture.alt = 'котик';
// picture.src = "https://www.hphhfoundation.org/blog/origin-of-cats";
// // document.body.appendChild(picture)
// // document.body.appendChild(title)

// document.body.prepend(picture)
// picture.after(title)

// const container = document.querySelector('.container')

// container.remove()

// document.body.innerHTML = `<div><p>cat</p><img src="https://www.hphhfoundation.org/blog/origin-of-cats" alt="photo"> </div>`;

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorPicker = document.querySelector(".js-color-picker");
// const buttons = colorPickerOptions
//   .map((element) => {
//     return `<button type="button" style="background-color: ${element.color};">${element.label}</button>`;
//   })
//   .join("");

// colorPicker.innerHTML = buttons;



const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPicker = document.querySelector(".js-color-picker");

colorPickerOptions.map(element=>{
    let btn = document.createElement('button') 
    btn.textContent = element.label
    btn.style.background = element.color
     
colorPicker.appendChild(btn)
})
