// Trabalhando com o objeto Math

const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.querySelector('#texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 5 é: <strong>${numero + 5}</strong></p>`;
texto.innerHTML += `<p>A raiz quadrada é: <strong>${Math.sqrt(numero)}</strong></p>`;
texto.innerHTML += `<p>É um inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;