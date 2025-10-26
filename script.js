const titulo = "VIDEO TUTORIAL DE LAS ESPECIALIDADES TÉCNICAS DE LA U.E. PUERTO DE ROSARIO";
const subtitulo = "PRESENTADO POR: DAYANA ISEL CHAVEZ VALLEJO Y BYANKA EUGENIA PACASI MALDONADO";
let iT = 0, iS = 0;

document.getElementById("titulo-principal").innerHTML = "";
document.getElementById("subtitulo-principal").innerHTML = "";

function escribirTitulo() {
  if(iT < titulo.length){
    document.getElementById("titulo-principal").innerHTML += titulo.charAt(iT);
    iT++;
    setTimeout(escribirTitulo, 60);
  } else {
    escribirSubtitulo();
  }
}

function escribirSubtitulo() {
  if(iS < subtitulo.length){
    document.getElementById("subtitulo-principal").innerHTML += subtitulo.charAt(iS);
    iS++;
    setTimeout(escribirSubtitulo, 40);
  }
}

window.onload = escribirTitulo;