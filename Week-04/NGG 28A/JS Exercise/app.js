const body = document.body;
body.append("Hello Web", " ", "Bye");

const div = document.createElement("div");
div.innerText = "Hello World1";
div.textContent = "Hello World2";
body.append(div);

//const div = document.querySelector("div");

console.log(div.textContent);
console.log(div.innerText);

div.innerHTML = "<strong>Hello World3</strong>";
