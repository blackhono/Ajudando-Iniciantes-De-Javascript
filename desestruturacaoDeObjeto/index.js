//Rest ... pega todo "resto"

const pessoa = {
    nome : 'Diego',
    sobrenome: 'Lepamar',
    idade: 29,
    endereco: {
        rua:'Clodomiro Amazonas',
        numero: 188
    }
}

const { nome: outroNome, sobrenome, idade } = pessoa;

const { endereco: { rua, numero } } = pessoa;

const { nome, ...resto} = pessoa 

console.log(outroNome, rua, numero);

console.log(nome, resto);

