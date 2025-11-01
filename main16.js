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

// const list = document.querySelector(".site-nav");
// const link = document.querySelector(".site-nav__item a ");
// link.classList.add("site-nav__link");
// console.log(link);
// list.style.backgroundColor = "red";

// const linkHref = document.querySelector('.site-nav__link a[href="https:/"]');
// linkHref.classList.add("big-font");
// console.log(linkHref);

// const lists = document.querySelectorAll("#list a");
// // lists.forEach((link) => {
// //   const href = link.getAttribute("href");

// //   if (link.href.startsWith("http://")) {
// //     link.style.color = "orange";
// //   }
// // });

// lists[0].classList.add("text-accent");
// lists[(lists.length = 1)].classList.add("text-accent");

// const title = document.querySelector("h1");
// title.textContent = ('coding')
// title.classList.add('text-acccent')

const table = document.querySelector("#age-table");
console.log(table);

const labels = document.querySelectorAll("label");
console.log(labels);

const search = document.querySelector('form[name="search-person"]');
console.log(search);

const inputs = search.querySelectorAll("input");
console.log(inputs[inputs.length - 1]);
