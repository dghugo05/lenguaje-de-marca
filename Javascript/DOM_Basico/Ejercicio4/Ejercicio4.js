let lista = document.getElementsByTagName("li");
let boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", () => {
    lista[lista.length-1].remove();
})