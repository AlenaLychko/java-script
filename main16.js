// console.log(document);
// console.dir(document);//дозволяє побачити дерево у вигляді обьекту
// console.log(document.body);
// console.log(document.querySelector('.text'));//шукає перший підходящий елемент під себе
// console.log(document.querySelectorAll(".text"));//створює псевдомасив із підходящих елементів
// console.log(document.getElementById('text'))

// const title = document.querySelector("h1");
// title.style.backgroundColor = "yellow";
// title.style.fontSize = "12px";
// console.log(title);

// const mainTitle = document.querySelector(".main-title");
// mainTitle.textContent = " додати текст через js";
// mainTitle.style.color = "blue";
// mainTitle.classList.add('text-accent')

const list = document.querySelector(".site-nav");
const link = document.querySelector(".site-nav__item a ");
link.classList.add("site-nav__link");
console.log(link);
list.style.backgroundColor = "red";

const linkHref = document.querySelector('.site-nav__link a[href="https:/"]');
linkHref.classList.add("big-font");
console.log(linkHref);
