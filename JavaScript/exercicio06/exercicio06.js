// Utilizando função, array e objeto


function mantainForm () {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(event) {
        event.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
    
        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
    
        resultado.innerHTML += `${nome.value} ${sobrenome.value}, pesa ${peso.value} e mede ${altura.value} <br>`
    };

    formulario.addEventListener('submit', recebeEventoForm);
}

mantainForm();