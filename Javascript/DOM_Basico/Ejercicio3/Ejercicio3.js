let boton_rojo = document.getElementById("Rojo");
let boton_azul = document.getElementById("Azul");
let boton_verde = document.getElementById("Verde");
let div = document.getElementsByTagName("div")[0];

boton_azul.addEventListener("click", () => {
    div.style.backgroundColor = "blue";
});

boton_rojo.addEventListener("click", () => {
    div.style.backgroundColor = "red";
});

boton_verde.addEventListener("click", () => {
    div.style.backgroundColor = "green";
});