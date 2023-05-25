    function encriptar(){
    let areaTexto = document.getElementById("areaTexto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");


    let textoEncriptado = areaTexto
      .toLowerCase()
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

      if (areaTexto.length != 0) {
        document.getElementById("areaTexto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./encriptado.jpg";
      } else {
        muneco.src = "./muneco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
    }
    function desencriptar() {
      const areaTexto = document.getElementById("areaTexto").value.toLowerCase();
      const tituloMensaje = document.getElementById("tituloMensaje");
      const parrafo = document.getElementById("parrafo");
      const muneco = document.getElementById("muneco");
    
      const palabrasClave = ["enter", "imes", "ai", "ober", "ufat"];
      const textoEncriptado = palabrasClave.reduce((texto, clave) => {
        return texto.replace(new RegExp(clave, "gi"), clave[0]);
      }, areaTexto);
    
      if (textoEncriptado !== areaTexto) {
        document.getElementById("areaTexto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./desencriptado.jpg";
      } else {
        muneco.src = "./muneco.png";
        tituloMensaje.textContent = "Error al desencriptar";
        parrafo.textContent = "Primero debes encriptar el texto para poder desencriptarlo.";
        swal("Ooops!", "El texto no está encriptado", "warning");
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
 



