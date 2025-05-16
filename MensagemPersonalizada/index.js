//criação da mensagem.
function generateMessage(name, age, city){
  const message = `Olá, \nmeu nome é ${name}, tenho ${age} anos e moro em ${city}.`;
  return message;
}

//definição das info.
const personName = "Fulano de Tal";
const personAge = 26;
const personCity = "Lugar Qualquer";

//chamada da função.
const formattedMessage = generateMessage(personName, personAge, personCity);

//impressão das info.
console.log(formattedMessage);