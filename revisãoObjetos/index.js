




const pessoa = {
    nome: 'Diego',
    sobrenome: 'Lepamar'
};

///tipos de chamada

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

// o segundo tipo é interessante pois da para criar algo dinamico  usando uma chave
//que recebe o valor a ser mudado quando necessário

let chave = 'nome';

console.log(pessoa[chave]);

//Outras maneiras de criar o objeto é

const pessoa2 = new Object();

pessoa2.nome = 'Nicole';
pessoa2.sobrenome = 'Lepamar';

console.log(pessoa2.nome);


console.log('----------- DELETE -------------')

//delete é usado para retirar uma chave de dentro do objeto basta

delete pessoa.sobrenome;
delete pessoa2.sobrenome;

console.log(pessoa);
console.log(pessoa2);


// vantagens em funções dentro de objetos é poder usar usar os elementos internos.

const pessoa3 = new Object();
pessoa3.nome = 'Jonas';
pessoa3.sobrenome = 'Intel';
pessoa3.idade = 30;
pessoa3.falarNome = function(){
    return (`${this.nome} esse é o nome de dentro do objeto`);
}

pessoa3.getDataNascimento = function(){
    let dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}


console.log(pessoa3.falarNome());

console.log(pessoa3.getDataNascimento());


//também podemos acessar os valores usando a chave em um for in 


for(let chave in pessoa3){
    console.log(chave);
};

for(let chave in pessoa3){
    console.log(pessoa3[chave]);
};


console.log('------------------ Criação de molde de objetos --------------')




//factory functions      


function criaPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Diego', 'Lepamar');
console.log(p1.nomeCompleto)

// constructor functions

function Pessoa(nome,sobrenome){
        this.nome = nome;
        this.sobrenome=sobrenome;
        this.nomeCompleto = (()=>{
            return `${this.nome} ${this.sobrenome}`
        })
    
}

const p2 = new Pessoa('Diego', 'Lepamar');
console.log(p2.nomeCompleto())

//Dá para travar um objeto não deixando ser manipulavel
// usando Object.freeze(this) Porém isso faz com que mais nada
// possa ser alterado ou criado dentro dele o que é bem 
//problematico


//Uma solução é usar defineProperty para uma ou
// defineProperties para mais de uma

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value:estoque, // valor da chave
        writable:false, // se pode alterar o valor
        configurable: false, // se pode apagar a chave
    })

}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1.estoque)
console.log(Object.keys(produto1))


/* 
//também da para usar o value como função
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value:function(){return estoque}, // valor da chave
        writable:false, // se pode alterar o valor
        configurable: false, // se pode apagar a chave
    })

}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1.estoque())
console.log(Object.keys(produto1)) */


//Agora caso queira fazer em mais de uma propriedade

function Produto2(nome, preco, estoque){

    Object.defineProperties(this, {
        //exemplo com function
        nome:{
            enumerable: true, //mostra chave
            value:function(){
                return nome
            }, // valor da chave
            writable:false, // se pode alterar o valor
            configurable: false, // se pode apagar a chave
        },
        //exemplo sem function
        preco:{
            enumerable: true, //mostra chave
            value:preco, // valor da chave
            writable:false, // se pode alterar o valor
            configurable: false, // se pode apagar a chave
        },

    })
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value:estoque, // valor da chave
        writable:false, // se pode alterar o valor
        configurable: false, // se pode apagar a chave
    })


}

const produto2 = new Produto2('Camiseta', 20, 3);
console.log(produto2.nome())
console.log(produto2.preco)
console.log(Object.keys(produto2))


/// Getters e Setters 

function Produto3(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Erro de tipo');
            }
            estoquePrivado = valor
        },
    })
}

const p3 = new Produto3('camisa', 20, 3);
console.log(p3);
console.log(p3.estoque);
p3.estoque=1;
console.log(p3);
console.log(p3.estoque);











console.log('-------------------------------Métodos uteis para Objetos -------------------------------------------')








//object.assign(des, any)
//object.getOwnPropertyDescriptor(o,'prop')
// ...(spread)

//lembrando de Object.Key retorna as chaves
//Object.freeze congela o objeto
//Object.defineProperties define varias propriedades
//Object.defineProperty define uma propriedade

console.log('------------- Melhor motivo para uso de spread --------------')
const produto4 = {nome: 'Joia', preco: 280.7}
const outraCoisa = produto4;
outraCoisa.nome = 'frango';
outraCoisa.preco = 15.99;

console.log(produto4)
console.log(outraCoisa)

const produto5 = {nome: 'Joia', preco: 280.7}
const outraCoisa2 = {...produto5};

outraCoisa2.nome = 'frango';
outraCoisa2.preco = 15.99;

console.log(produto5);
console.log(outraCoisa2);









console.log('------------- assign --------------')







const produto6 = {nome: 'Joia', preco: 280.70}
const caneca = Object.assign( {}, produto6, { material: 'porcela', brilho:'Fosco'});

caneca.nome = 'Caneca Grande';
caneca.preco = 25.99;

console.log(produto6);
console.log(caneca);


//caso queira pegar apenas uma propriedade 



const caneca2 = {nome: caneca.nome};

console.log(caneca2);






console.log('---------------- getOwnPropertyDescriptor -------------')




const produto7 = {nome: 'Joia', preco: 280.70, custo: 170.00}

console.log(Object.getOwnPropertyDescriptor(produto7,'nome'));

console.log(Object.getOwnPropertyDescriptors(produto7));






console.log('---------------- Entries e Value -------------');





const produto8 = {nome: 'Joia', preco: 280.70, custo: 170.00}

for(let entry of Object.entries(produto8)){
    console.log(entry);
}

//Da para fazer Desestruturação de dados seguindo este mesmo conceito

for(let [chave, valor] of Object.entries(produto8)){
    console.log(chave, valor);
}








