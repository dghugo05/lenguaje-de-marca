let contenedor = document.getElementsByTagName("div")[0];
let color = contenedor.style.backgroundColor;
contenedor.addEventListener("mouseover", () => {
    contenedor.style.backgroundColor = "yellow";
});

contenedor.addEventListener("mouseleave", () => {
    contenedor.style.backgroundColor = color;
});