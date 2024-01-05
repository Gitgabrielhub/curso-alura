//função responsável por disparar um som quando elemento for clicado
function tocarSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento === null) {
    alert("elemento nao encontrado");
    console.log(`o seletor ${seletorAudio} nao existe `);
  }
  elemento.play();
}
//
const listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;
//console.log(listaDeTeclas);

for (contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocarSom(idAudio);
  };
  tecla.onkeydown = function (evento) {
    console.log(evento.code);
    if (evento.code === "Enter" || evento.code === "Space ") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
