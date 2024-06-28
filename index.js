function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imageninicial = document.getElementById("imageninicial");

  let textoCifrado = texto
      .replace(/a/gi, "enter")
      .replace(/e/gi, "imes")
      .replace(/i/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

  if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imageninicial.src = "./asets de imagen/encriptado.jpg";
  } else {
      imageninicial.src = "./asets de imagen/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imageninicial = document.getElementById("imageninicial");

  let textoDesencriptado = texto
      .replace(/ufat/gi, "u")
      .replace(/ober/gi, "o")
      .replace(/ai/gi, "i")
      .replace(/imes/gi, "e")
      .replace(/enter/gi, "a");

  if (texto.length != 0) {
      document.getElementById("texto").value = textoDesencriptado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      imageninicial.src = "./asets de imagen/encriptado.jpg";
  } else {
      imageninicial.src = "./asets de imagen/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
  }
}