const password = document.getElementById("password").innerText;
console.log(password);

const button = document.createElement("p");
button.innerHTML = password;
const form = document.querySelector("form");
form.appendChild(button);


