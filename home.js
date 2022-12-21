var i = 0;
var imgs = [];
var tiempo = 1500;

//lista de imagenes
imgs[0] = "./img/imagen_header1.webp";
imgs[1] = "./img/imagen_header2.webp";
imgs[2] = "./img/imagen_header3.webp";
imgs [3]= "./img/header-image.webp";

function cambiarImagenHeader() {

  var header = document.getElementById("header");
  if (i < imgs.length) {
    header.style.backgroundImage= `url(${imgs[i]})`;
    i++;
  } else {
    i = 0;
  }
  setTimeout("cambiarImagenHeader()", tiempo);
}

window.onload = cambiarImagenHeader;
