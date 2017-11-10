window.onload = function () {
  var modal = document.querySelector(".ventana-modal");

  modal.addEventListener("click", mostrar);
};

function mostrar () {
  var modal = document.querySelector("#modal")
  modal.style.display = "block";
  var img1 = document.querySelector(".img1");
  img1.style.width = "700px";
  img1.style.height = "500px";
  img1.style.display = "block";
  img1.style.marginLeft = "200px";
};

  /*var parrafo = document.createElement("p");
  var contenido = document.createTextNode("..");
  var padre =
  parrafo.appendChild(contenido);
  document.padre.appendChild(parrafo);
*/
