//o objetivo é descobrir qual a probalidade de ter resultado positivo ou nulo em 10 escolhas multiplas

const respostas = [
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
  ["a", "b", "b", "b"],
];

let todasErradas = 0;
let todasCertas = 0;

function escolher() {
  //vai randomizar as escolhas para ver qual a probalidade de acabar positivo
  let escolhas = [];
  for (let i = 0; i < respostas.length; i++) {
    let respostaEscolhida = Math.floor(Math.random() * 4);
    escolhas.push(respostaEscolhida);
  }
  return escolhas;
}

function corretas() {
  let respostasCertas = [];
  for (let i = 0; i < respostas.length; i++) {
    for (let a = 0; a < respostas[i].length; a++) {
      if (respostas[i][a] == "a") {
        respostasCertas.push(a);
      }
    }
  }
  return respostasCertas;
}

function verificar() {
  let escolhas = escolher();
  let respostasCertas = corretas();
  let score = 0;

  for (let i = 0; i < escolhas.length; i++) {
    if (respostasCertas[i] == escolhas[i]) {
      score++;
    }
  }
  if (score >= 5) {
    if (score == 10) {
      todasCertas++;
    }
    return 1;
  } else {
    if (score == 0) {
      todasErradas++;
    }
    return 0;
  }
}

function testarXVezes(vezes) {
  let inicio = performance.now()
  let positivas = 0;
  for (let i = 0; i < vezes; i++) {
    positivas += verificar();
  }
  let taxa = ((positivas / vezes) * 100).toFixed(3);
  console.log("----------------------------------------------------------");
  console.log(
    `Em ${vezes} tentativas houve um resultado positivo ${positivas} vezes!`
  );
  console.log(`Taxa de positivas: ${taxa}%`);
  console.log(`Todas acertadas: ${todasCertas}`);
  console.log(`Todas erradas: ${todasErradas}`);
  let fim = performance.now();
  console.log(`O cálculo foi feito em ${((fim-inicio)/1000).toFixed(3)} segundos`)
}

testarXVezes(1000000000);
