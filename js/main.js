//Acceso al DOM -> Document Objects Model


var aventura = document.getElementById('aventura');
var eos = document.getElementById('eos');
var conectividad = document.getElementById('conectividad');
var videos = document.getElementById('videos');
var enfoque = document.getElementById('enfoque');

var btn_aventura = document.getElementById('btn_aventura');
var btn_eos = document.getElementById('btn_eos');
var btn_conectividad = document.getElementById('btn_conectividad');
var btn_videos = document.getElementById('btn_videos');
var btn_enfoque = document.getElementById('btn_enfoque');

aventura.style.display = "none";
eos.style.display = "none";
conectividad.style.display = "none";
videos.style.display = "none";

mostrarVideos = function () {
 videos.style.display = "block";
 aventura.style.display = "none";
 eos.style.display = "none";
 conectividad.style.display = "none";
 enfoque.style.display = "none";
}

mostrarConectividad = function () {
 conectividad.style.display = "block";
 aventura.style.display = "none";
 eos.style.display = "none";
 enfoque.style.display = "none";
 videos.style.display = "none";
}

mostrarEos = function () {
 eos.style.display = "block";
 aventura.style.display = "none";
 enfoque.style.display = "none";
 conectividad.style.display = "none";
 videos.style.display = "none";
}

mostrarAventura = function () {
 aventura.style.display = "block";
 enfoque.style.display = "none";
 eos.style.display = "none";
 conectividad.style.display = "none";
 videos.style.display = "none";
}

mostrarEnfoque = function () {
 enfoque.style.display = "block";
 aventura.style.display = "none";
 eos.style.display = "none";
 conectividad.style.display = "none";
 videos.style.display = "none";
}

btn_enfoque.addEventListener('click', mostrarEnfoque);
btn_videos.addEventListener('click', mostrarVideos);
btn_conectividad.addEventListener('click', mostrarConectividad);
btn_eos.addEventListener('click', mostrarEos);
btn_aventura.addEventListener('click', mostrarAventura);