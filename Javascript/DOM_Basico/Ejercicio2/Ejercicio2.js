let boton = document.getElementsByTagName("div")[0];
let contador = 1;

boton.addEventListener("click", () => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es el párrafo " + contador;
    contador++;
    document.body.appendChild(nuevoParrafo);
});
