var i = 0;
var imgs = [];
var tiempo = 1500;

//lista de imagenes
imgs[0] = "https://sdamorebieta.eus/wp-content/uploads/2022/12/alevin-11a-r-1200x900.jpg";
imgs[1] = "https://sdamorebieta.eus/wp-content/uploads/2022/12/81909584-BA16-4FE0-A88E-7EBB8729066E-1200x850.jpeg";
imgs[2] = "https://sdamorebieta.eus/wp-content/uploads/2022/12/F1338BA8-B591-44C4-8953-663A495E7EF6-1200x800.jpeg";
imgs [3]= "./img/header-image.png";

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
