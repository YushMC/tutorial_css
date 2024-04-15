let menuBars = document.getElementById("bars_menu");
let constLinks2 = document.getElementById("abajo_header");

menuBars.addEventListener('click', ()=>{
    if (constLinks2.style.display == "none" || constLinks2.style.display === ""){
        menuBars.classList.add("fa-xmark");
        menuBars.classList.remove("fa-bars");
        constLinks2.style.display = "flex";
    }else{
        menuBars.classList.add("fa-bars");
        menuBars.classList.remove("fa-xmark");
        constLinks2.style.display = "none";
    }

});