// Calcular o IMC com LET e CONST e exibir o resultado no console

const nome = 'Maryna';
const sobrenome = 'Kao';
const altura = 170;
let peso = 60;
let idade = 24;
let calcularoImc;
let anoDeNascimento

calcularoImc = peso / (altura * altura);
anoDeNascimento = 2020 - idade;


console.log(`${nome} ${sobrenome} que tem ${idade} e nasceu em ${anoDeNascimento}`);
console.log(`Tem ${altura} de altura em centímetros e pesa ${peso}kg`)
console.log(`O resultado de seu IMC é ${calcularoImc}`)