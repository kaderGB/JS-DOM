const emoji = document.querySelector('#emoji');
const emojis = ["🥰","😇","🤩"];
const key= document.querySelector('#key');


emoji.addEventListener('mouseover',()=>
emoji.innerHTML = emojis[Math.floor(Math.random()* emojis.length)]


)