const verificaDados = (info1, info2, info3) => {

  let mensagem1, mensagem2, mensagem3;

  if (info1 >= 18) {
    mensagem1 = "A pessoa é maior de idade.";
  } else {
    mensagem1 = "A pessoa é menor de idade.";
  }

  if (info2 === true) {
    mensagem2 = "A pessoa terminou o ensino médio.";
  } else {
    mensagem2 = "A pessoa não terminou o ensino médio.";
  }

  if (info3 === false) {
    mensagem3 = "A pessoa está cursando falculdade.";
  } else {
    mensagem3 = "A pessoa não está cursando falculdade.";
  }

  return `${mensagem1}\n${mensagem2}\n${mensagem3}`;
};

const idade = prompt("Qual a idade da pessoa?");
const ensinoMedio = confirm("A pessoa terminou o ensino médio?");
const faculdade = confirm("A pessoa NÃO está cursando alguma faculdade");

console.log(verificaDados(idade, ensinoMedio, faculdade));
