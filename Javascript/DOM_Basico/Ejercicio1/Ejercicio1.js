let titulo = document.getElementsByTagName("h1")[0];let boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", () => {
    document.getElementsByTagName("h1")[0].textContent = "Texto cambiado"
});