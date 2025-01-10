const color = document.getElementById("color");
const boton = document.querySelector("button");

function nueovHexaDecimal() {
    let digitos = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio];
    }

    return color;
}



boton.addEventListener("click", function () {
    let colorAleatorio = nueovHexaDecimal();
    document.body.style.backgroundColor = colorAleatorio;
    document.getElementById("color").innerHTML = colorAleatorio;
});