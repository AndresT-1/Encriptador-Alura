function encriptarTexto(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptarTexto(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}
function mostrarResultado(texto) {

    document.querySelector(".seccion_encriptado img").style.display = "none";
    document.querySelector(".contenedor_texto").style.display = "none";
    

    document.querySelector(".encriptado").style.display = "flex";
    

    document.getElementById("texto_desencriptado_encriptado").innerText = texto;
}
function validarTexto(texto) {
    // Elimina caracteres no permitidos y convierte a minúsculas
    return texto.replace(/[^a-z\s]/g, '').toLowerCase();
}


document.querySelector(".btn_encriptar").addEventListener("click", function() {
    let texto = document.getElementById("texto_a_encriptar").value.toLowerCase();
    let textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
});

document.querySelector(".btn_desencriptar").addEventListener("click", function() {
    let texto = document.getElementById("texto_a_encriptar").value.toLowerCase();
    let textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
});

document.addEventListener('DOMContentLoaded', function () {
    const btnCopiar = document.querySelector('.btn_copiar');
    const textoEncriptado = document.getElementById('texto_desencriptado_encriptado');


    btnCopiar.addEventListener('click', function () {
        const texto = textoEncriptado.textContent; 

      
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    });
});

document.getElementById("texto_a_encriptar").addEventListener("input", function() {
    this.value = validarTexto(this.value);
});

