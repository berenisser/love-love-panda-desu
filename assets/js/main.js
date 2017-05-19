var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
var espacioFotos = document.getElementById("fotitos");

pictures.forEach(function(el){
	var fotos = document.createElement("img");
	fotos.setAttribute("src",el);
	fotos.classList.add("cada-panda");
	espacioFotos.appendChild(fotos);
})