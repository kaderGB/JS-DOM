const firstLI = document.querySelector("li");
console.log(firstLI);

console.log(firstLI.parentElement.parentElement);


const ul = document.querySelector("ul");
console.log(ul.children);

console.log(ul.children[1]);
console.log(ul.children[0].innerHTML="children");

console.log(firstLI.nextElementSibling.textContent);