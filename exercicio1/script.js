const vericaParOuImpar = (num) => {
  if (num % 2 === 0) {
    const mensagem = "Número digitado é \"PAR\"";
  } else if (num % 2 === 1) {
    mensagem = "Número digitado é \"IMPAR\"";
  } else {
    mensagem = "Valor inválido";
  }
  return mensagem;
}

numero = Number(prompt("Digite um número: "));
console.log(vericaParOuImpar(numero));