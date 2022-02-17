function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando!`)
        },
        comer() {
            console.log('comendo')
        },
        beber() {
            console.log('bebendo')
        },
    }

    return Object.create(pessoaPrototype, {
        nome: { value: nome,
            enumerable: true
        },
        sobrenome: {value : sobrenome },
    });
}

const p1 = criaPessoa('Diego', 'Lepamar');
console.log(p1);

//Porém podemos desacoplar os metódos para tirar um pouco
// da complexidade da herança e permitir uma facilidade
//no reuso desses metódos

//Quando fazemos esse tipo de composição que é, 
//compor um objeto com varios objetos, e a que estou
//usando tem nome que é mixing (pois não tem herança,
//hierarquia) é realmente uma 'mistura'.

//usando de template literals 
const falar = {
    falar() {
        console.log(`${this.nome} está falando!`);
    },
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo!`);
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo!`);
    },
};

//assim posso selecionar quais metódos vou passar para 
// 'criaPessoa1' podendo montar um escopo de prototypes.
//ex:
/* 
const pessoaPrototype = {...falar,...comer,...beber}

*/


const pessoaPrototype = {...falar,...comer,...beber}


//também podemos fazer com Object.assign();
//lembrando que enviamos um objeto vazio no começo ai
//pois estamos criando um novo objeto
//ex: 
// const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa1(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: { value: nome,
            enumerable: true },
        sobrenome: { value: sobrenome },
    });
}



const p2 = criaPessoa1('Nicole', 'Lepamar');
console.log(p2);