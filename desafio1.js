let nome = prompt("😀 Olá, qual seu nome?");
alert(`🧐 Seja bem vindo ${nome}!`);

let anoNascimento = parseInt(prompt(`😀 ${nome}, em qual ano você nasceu?`));

const ANO_HOJE = new Date().getFullYear();

alert(`🧐 ${nome}, segundo meus cálculos você tem ou fará ${ANO_HOJE - anoNascimento} anos.`);
