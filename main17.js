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

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorPicker = document.querySelector(".js-color-picker");

// colorPickerOptions.map(element=>{
//     let btn = document.createElement('button')
//     btn.textContent = element.label
//     btn.style.background = element.color

// colorPicker.appendChild(btn)
// })

// const container = document.querySelector(".color-picker");
// container.insertAdjacentHTML("beforebegin", "<p> перед елементом</p>");
// container.insertAdjacentHTML("afterbegin", "<p>на початку елемента</p>");
// container.insertAdjacentHTML("beforeend", "<p>на прикінці елементу </p>");
// container.insertAdjacentHTML("afterend", "<p>після елементу</p>");

// const btn = document.querySelector('button[data-action="close"]');
// console.log(btn.dataset.action);

// const title = document.createElement("h2");
// title.textContent = "hello world";
// document.body.appendChild(title)

// const list = document.querySelector('.list')
// list.innerHTML = `<li class="site-nav__item">
//   <a href="" class="site-nav__link">Про нас</a>
// </li>`;

// const form = document.querySelector("#form");
// const input = document.querySelector("#add_text");
// const button = document.querySelector("#button");
// const list = document.querySelector("#list");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const a = input.value.trim();
//   list.innerHTML += `<li>${a}</li>`;
//   input.value = "";
// });

// const images = [
//   "https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];
// const gallery = document.querySelector('#gallery')
// const picture = images.map(img =>{
//     return `<img src=${img}/>`
// })

// gallery.innerHTML = picture