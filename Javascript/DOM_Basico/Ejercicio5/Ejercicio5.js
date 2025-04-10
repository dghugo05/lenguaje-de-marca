let tarea = document.getElementsByTagName("input")[0];
let boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", () => {
    const tareaNueva = document.createElement("li");
    tareaNueva.textContent = tarea.value;
    document.getElementsByTagName("ul")[0].appendChild(tareaNueva);
});