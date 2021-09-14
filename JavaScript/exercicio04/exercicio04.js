// Colocar um texto dentro do HTML

const nome = prompt('Digite seu nome completo:');

let escritaTela = document.querySelector('.container');


escritaTela.innerHTML += `O seu nome é: <strong>${nome}</strong><br/>` ;
escritaTela.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras<br/>`;
escritaTela.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br/>`;
escritaTela.innerHTML += `O primeiro índice de letra "a" do seu nome é: <strong>${nome.indexOf('a')}</strong><br/>`;
escritaTela.innerHTML += `O último índice de letra "a" do seu nome é: <strong>${nome.lastIndexOf('a')}</strong><br/>`;
escritaTela.innerHTML += `As últimas duas letras do seu nome são: <strong>${nome.slice(-2)}</strong><br/>`;
escritaTela.innerHTML += `As palavras do seu nome são: <srtrong>${nome.split(' ')}</srtrong><br/>`;
escritaTela.innerHTML += `Seu nome só com maiúsculas é: <strong>${nome.toUpperCase()}</strong><br/>`;
escritaTela.innerHTML += `Seu nome só em minúsculas é: <strong>${nome.toLowerCase()}</strong>`;