/*
//Exemplo com export no final.

const nome = 'Diego'
const sobrenome = 'Lepamar';
const idade = 30;

function soma(x,y){
    return x+y
}



//para exportar apenas nome e sobrenome
export { nome, sobrenome, idade, soma };



 */


export const nome = 'Diego'
export const sobrenome = 'Lepamar';
export const idade = 30;

/* 
    se criar algo dentro do modulo sem exportar você está tornando 
    esse algo em privado. Onde apenas o Módulo tem acesso! Também
    não acessando o escopo global!
*/

const segredoDoModulo = 'sou uma variavel privada do módulo'

export function soma(x,y){
    return x+y
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        return `${this.nome} está falando que seu sobrenome é ${this.sobrenome}`
    }
}

const cor = 'amarelo';
const modelo='Bravo';

//o default serve para exportar algo como padrão onde não precisa pegar exatamente
//no import.
export default { cor, modelo };

