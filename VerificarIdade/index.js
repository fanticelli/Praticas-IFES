try {
  let idade = parseInt(prompt("Digite a sua idade: "));

  if (isNaN(idade)) {
    throw new Error("Por favor, insira uma idade válida.");
  }

  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
} catch (erro) {
  console.log('Ocorreu um erro: ' + erro.message);
}
