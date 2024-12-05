var submenus = document.getElementsByClassName("submenu");
submenus[0].style.display = "none";

var desafios = document.getElementById("Desafios");

desafios.addEventListener("click", function(){
    if(submenus[0].style.display == "none"){
        submenus[0].style.display = "block";
    }else{
        submenus[0].style.display = "none";
    }
});