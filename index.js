function encriptar() {
    let texto = document.getElementById("texto").Value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let inmageninicia = document.getElementById("imageninicia");
  
    let textoCifrado = texto
        .replace(/a/gi, "enter")
        .replace(/e/gi, "imes")
        .replace(/i/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
  
    if (texto.lenght != 0){
      document.getElementById("texto").Value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imageninicia.src = "./asets de imagen/encriptado.jpg";
      } else {
        imageninicia.src = "./asets de imagen/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
     }
  }

function desencriptar(){
    let texto = document.getElementById("texto").Value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let inmageninicia = document.getElementById("imageninicia");
    
    let textoCifrado = texto
        .replace(/enter/gi, "a")
        .replace(/imes/gi, "e")
        .replace(/ai/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.lenght != 0){
            document.getElementById("texto").Value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      imageninicia.src = "./asets de imagen/encriptado.jpg";
        } else {
            imageninicia.src = "./asets de imagen/Muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar algún texto");
         }
}