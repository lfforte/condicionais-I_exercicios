const respostaPrompt = prompt("Escreva aqui sua nacionalidade.");
const nacionalidade = respostaPrompt.toLowerCase();
console.log(respostaPrompt);
console.log(nacionalidade);

const verificaNacionalidade = (dados) => {
  if (dados === "brasileiro") {
    console.log(`Sua nacionalidade é ${dados}`);
  } else if (dados === "argentina") {
    console.log(`Sua nacionalidade é ${dados}`);
  } else if (dados === "uruguaia") {
    console.log(`Sua nacionalidade é ${dados}`);
  } else if (dados === "chilena") {
    console.log(`Sua nacionalidade é ${dados}`);
  } else if (dados === "colombiana") {
    console.log(`Sua nacionalidade é ${dados}`);
  } else {
    console.log(`Nacionalidade não encontrada.`);
  }

}

verificaNacionalidade(nacionalidade);