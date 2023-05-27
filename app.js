
const encriptar = document.querySelector(".encriptar");
const desencriptar = document.querySelector(".desencriptar");
let salida = document.querySelector(".mensaje-salida");
const copiar = document.querySelector(".copiar");
document.querySelector(".contenido-salida").style.display = "none";

function funcion_encriptar(mensaje) {
    let mensaje_encriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                mensaje_encriptado += "ai";
                break;
            case "e":
                mensaje_encriptado += "enter";
                break;
            case "i":
                mensaje_encriptado += "imes";
                break;
            case "o":
                mensaje_encriptado += "ober";
                break;
            case "u":
                mensaje_encriptado += "ufat";
                break;
            default:
                mensaje_encriptado += mensaje[i];
                break;
        }
    }
    return mensaje_encriptado;
};

function funcion_desencriptar(mensaje) {
    let mensaje_desencriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                if (mensaje[i + 1] == "i") {
                    mensaje_desencriptado += "a";
                    i++;
                }
                break;
            case "e":
                if (mensaje[i + 1] == "n" && mensaje[i + 2] == "t" && mensaje[i + 3] == "e" && mensaje[i + 4] == "r") {
                    mensaje_desencriptado += "e";
                    i += 4;
                }
                break;
            case "i":
                if (mensaje[i + 1] == "m" && mensaje[i + 2] == "e" && mensaje[i + 3] == "s") {
                    mensaje_desencriptado += "i";
                    i += 3;
                }
                break;
            case "o":
                if (mensaje[i + 1] == "b" && mensaje[i + 2] == "e" && mensaje[i + 3] == "r") {
                    mensaje_desencriptado += "o";
                    i += 3;
                }
                break;
            case "u":
                if (mensaje[i + 1] == "f" && mensaje[i + 2] == "a" && mensaje[i + 3] == "t") {
                    mensaje_desencriptado += "u";
                    i += 3;
                }
                break;
            default:
                mensaje_desencriptado += mensaje[i];
                break;
        }
    }
    return mensaje_desencriptado;
};

encriptar.addEventListener("click", function () {
    const mensaje = document.getElementById("mensaje");
    const mensaje_encriptado = funcion_encriptar(mensaje.value);
    salida.innerHTML = mensaje_encriptado;
    mensaje.value = "";
    document.querySelector(".contenido-previo").style.display = "none";
    document.querySelector(".contenido-salida").style.display = "inline-block";
});

desencriptar.addEventListener("click", function () {
    const mensaje = document.getElementById("mensaje");
    const mensaje_desencriptado = funcion_desencriptar(mensaje.value);
    salida.innerHTML = mensaje_desencriptado;
    mensaje.value = "";
    document.querySelector(".contenido-previo").style.display = "none";
    document.querySelector(".contenido-salida").style.display = "inline-block";
});

copiar.addEventListener("click", function () {
    let auxiliar = document.createElement("input");
    auxiliar.setAttribute("value", salida.innerHTML);
    document.body.appendChild(auxiliar);
    auxiliar.select();
    document.execCommand("copy");
    document.body.removeChild(auxiliar);
});
