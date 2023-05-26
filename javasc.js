  function encriptar() {
  let areaTexto = document.getElementById("areaTexto").value;
  let tituloMensaje = document.getElementById("tituloMensaje");
  let parrafo = document.getElementById("parrafo");
  let muneco = document.getElementById("muneco");

  const patron = /^[a-z]+$/;
  
  if (patron.test(areaTexto)) {
    let textoEncriptado = areaTexto
      .toLowerCase()
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("areaTexto").value = textoEncriptado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./encriptado.jpg";
  } else {
    muneco.src = "./muneco.png";
    tituloMensaje.textContent = "Error al encriptar";
    parrafo.textContent = "El texto debe contener solo letras minúsculas sin acentos y sin símbolos.";
    swal("Ooops!", "El texto no es válido", "warning");
  }
}

function desencriptar() {
  const areaTexto = document.getElementById("areaTexto").value.toLowerCase();
  const tituloMensaje = document.getElementById("tituloMensaje");
  const parrafo = document.getElementById("parrafo");
  const muneco = document.getElementById("muneco");

  const patron = /^[a-z]+$/;

  if (patron.test(areaTexto)) {
    const palabrasClave = ["enter", "imes", "ai", "ober", "ufat"];
    const textoDesencriptado = palabrasClave.reduce((texto, clave) => {
      return texto.replace(new RegExp(clave, "gi"), clave[0]);
    }, areaTexto);

    document.getElementById("areaTexto").value = textoDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muneco.src = "./desencriptado.jpg";
  } else {
    muneco.src = "./muneco.png";
    tituloMensaje.textContent = "Error al desencriptar";
    parrafo.textContent = "El texto debe contener solo letras minúsculas sin acentos y sin símbolos.";
    swal("Ooops!", "El texto no es válido", "warning");
  }
}
    function copiar() {
        var textarea = document.getElementById("areaTexto");
        textarea.select();
      
        if (textarea.value.trim() === "") {
          swal("No hay texto para copiar.");
          return;
        }
      
        if (navigator.clipboard) {
          navigator.clipboard.writeText(textarea.value)
            .then(function() {
              swal("¡El texto se ha copiado al portapapeles!");
            })
            .catch(function(error) {
              swal("Error al copiar el texto: " + error);
            });
        } else {
          swal("La API Clipboard no está disponible en este navegador.");
        }
      }
 



