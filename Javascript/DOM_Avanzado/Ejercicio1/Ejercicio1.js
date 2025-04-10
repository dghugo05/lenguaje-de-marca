document.getElementById("Añadir").addEventListener("click", () => {
    if(document.getElementById("texto").value.trim() !== ""){
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = document.getElementById("texto").value;
        let deletebutton = document.createElement("button")
        deletebutton.textContent = "Eliminar";
        let editbutton = document.createElement("button")
        editbutton.textContent = "Editar";
        nuevoItem.appendChild(deletebutton);
        nuevoItem.appendChild(editbutton);
        document.getElementById("Lista").appendChild(nuevoItem);
        document.getElementById("texto").value = "";
        deletebutton.addEventListener("click", () => {
            nuevoItem.remove();
        });
        editbutton.addEventListener("click", () => {
            let nuevoTexto = prompt("Introduzca el nuevo elemento");
            if(nuevoTexto !== null){
                nuevoItem.firstChild.textContent = nuevoTexto;
            }
        });
    }else{
        document.getElementById("texto").value = "";
    }
});