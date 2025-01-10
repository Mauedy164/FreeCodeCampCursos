const toppings = document.getElementsByClassName("topping");


//e simboliza evento
function mostrarClic(e){
    console.log(e.target.innerText); //Nos da el target o blanco y extrae el texto
}

for (const topping of toppings) {
    topping.addEventListener("click", mostrarClic);
}


