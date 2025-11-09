// const btn = document.querySelector(".btn")

// const btnAlert = function(){
//     alert("tuck")
// }
// //element.addEventListener додаємо подію на елемент
// //element.removeEventListener видаляємо подію з елемент
// // btn.addEventListener('click',()=> alert('tuck'))
// btn.addEventListener("click", btnAlert);
//event.preventDefault()
// const addBtn = document.querySelector('button[data-action="add"]');
// const deleteBtn = document.querySelector('button[data-action="remove"]');
// const btn = document.querySelector(".#btn");

// const btnAlert = function(){
//     alert("tuck")
// }
// addBtn.addEventListener('click', ()=>{
//     btn.addEventListener('click', btnAlert)
// })

// deleteBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", btnAlert);
// });

//important
// const form = document.querySelector(".form");
// const login = document.querySelector('input[type="text"]');
// const pass = document.querySelector('input[type="password"]');
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const loginV = login.value.trim();
//   const passV = pass.value.trim();
//   if (loginV === "" && passV === "") {
//     return alert("enter yout info!!!");
//   }
//   form.reset()
//   alert(`u enter ur login ${loginV} and password ${passV}`);
//   alert("thanks u log in")
// });
// const input = document.querySelector("txt");
// const text = document.querySelector("hello");
// const button = document.querySelector(".btn");
// button.addEventListener("click", () => {
// //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// //   button.style.backgroundColor = randomColor;

// let value = input.value.trim();
//   if(value){
//      text.textContent = value
//   }
// });

// const button = document.querySelector("btn");
// button.addEventListener("click", () => alert("hello world"));

// const button = document.querySelector(".btn")
// const title = document.querySelector('.strawberry')
// const input = document.querySelector(".name")
// button.addEventListener('click', ()=>{
//     const name = input.value.trim()
//     title.textContent = `hello, ${name}`
// })

//змінює колір
// const button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   document.body.style.backgroundColor = randomColor;
// });

//кнопка яка показує та ховає елемент
// const buttonHides = document.getElementById("btn");
// const titleHides = document.getElementById("title");
// buttonHides.addEventListener("click", () => {
//   if (titleHides.style.display === "none") {
//     titleHides.style.display = "block";
//   } else{
//      titleHides.style.display = "none";
//   }
// });
//збільшує або зменшує розмір кнопки
// const text = document.getElementById("text");
// let fontSize = 12;
// document.getElementById("minus").addEventListener("click", () => {
//   fontSize = fontSize - 2;
//   text.style.fontSize = fontSize + "px";
// });
// document.getElementById("plus").addEventListener("click", () => {
//   fontSize += 2;
//   text.style.fontSize = fontSize + "px";
// });

const form = document.querySelector(".form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const phone = document.querySelector("#phone");
const adres = document.querySelector("#adres");
form.addEventListener("submit", () => {
  const first = firstName.value.trim();
  const last = lastName.value.trim();
  const phoNum = phone.value.trim();
  const adress = adres.value.trim();
  if (first === "" && last === "" && phoNum === "" && adress === "") {
    return alert("enter yout info!!!");
  }
  form.reset();
  alert(
    `u  are ${first} , ${last} your phone number is ${phoNum} and your adres is ${adress}`
  );
  alert("thanks ");
});
