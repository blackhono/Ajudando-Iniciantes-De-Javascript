function falaComeco(comeco) {
    function falaFinal(final) {
        return comeco + '  ' + final;
    }
    return falaFinal;
}


const fala = falaComeco('Olá');
console.log(fala);

const resto = fala('mundo');

console.log(resto);

//por que seria util? por exemplo...

function criaMultiplicador(multiplicador){
    return function(numero){
        return numero * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

//aqui nós criamos funções diferentes a partir de outra
//usando a lembrança do elemento pai
// a tecnica utilizada aqui foi a de Closures 
// que é continuar uma função fora de seu escopo.

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
