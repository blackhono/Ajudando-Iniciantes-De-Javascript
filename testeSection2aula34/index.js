function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    /* form.onsubmit = function (event){
        event.preventDefault();
    } */
    function recebeEventoForm(evento){
        evento.preventDefault(); 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(sobrenome.value);
        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso : peso.value, 
            altura: altura.value});
        console.log(pessoas);
        resultado.innerHTML += `<p> nome: ${nome.value} sobrenome:${sobrenome.value} peso:${peso.value} altura:${altura.value}</p>`

    }

    form.addEventListener('submit', recebeEventoForm);
}



meuEscopo();