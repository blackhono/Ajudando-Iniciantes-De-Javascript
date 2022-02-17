// Construtora -> molde (classe)

/* 
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro

Protótipo é o termo usado para se referir ao que foi criado pela primeira
vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma refêrencia interna para um protótipo (_proto_)
que vem da propriedade prototype da função construtora que foi usada
para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro
o motor do JS vai tentar encontrar este membro no próprio objeto e
depois a cadeia de protótipos é usada até o topo (null) até encontrar
(ou não) tal membro
*/

//muito mais perfomance!

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

Pessoa.prototype.nomeCompleto=function(){
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Diego', 'Lepamar'); // função construtora
const data = new Date(); // = função construtora

console.dir(pessoa1);
console.dir(data);



console.log('-------------- Manipulação De Prototype ------------')
// Manipulação de Prototypes

//quando usamos Literal Object o javascript já cria o 
//um new Object 
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
}

const objB = {
    chaveA: 'B'
    //__proto__: Object.prototype
}

const objC = new Object();
objC.chaveC= 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA)


//exemplo:

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    return this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    return this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('camisa', 20.90); 

console.log(p1)
console.log(p1.desconto(10))
console.log(p1.aumento(10))

//como fazer para reaproveitar um metodo dentro do outro objeto

const p2 = {
    nome: 'Caneca',
    preco: 12.90,
}

Object.setPrototypeOf(p2, Produto.prototype);
console.log(p2.aumento(10))
console.log(p2)


//outra maneira de fazer já linkado

const p3 = Object.create(Produto.prototype);
p3.nome = 'Cadeira';
p3.preco = 199;

console.log(p3.aumento(10))

/// também tem como configurar o objeto usando este modo.

const p4 = Object.create(Produto.prototype,{
    preco:{
        writable: true,
        enumerable: true,
        configurable: true,
        value: 42
    },
    nome:{
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Despertador'
    }
})

p4.aumento(10);
console.log(p4);





console.log('-------------- Herança utilizando ProtoType ------------')
//Lembrando que em JS não existe HERANÇA em si na realidade  o que
//ocoorre é DELEGAÇÃO






// Digamos q um vendedor peça para criar algo relacionado a
//itens como Lapis, Caneta, Camiseta, Caneca
//Se abstrair a informação veremos que todos são PRODUTOS
//criariamos algo assim

//Coloquei Produto2 pois já existe produto aqui mas o certo é Produto.

//O que todos esses produtos tem em comum?
//Nomes, preços, materiais, cor 
//tambem queremos que o produto traga aumento e desconto como métodos

function Produto2(nome, preco, material, cor, quantidade){
    this.nome = nome;
    this.preco = preco;

}
Produto2.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto2.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

//agora vamos usar um desses itens para especializar e colocar
//coisas que só queremos nessa coisa.

function Camiseta(nome, preco, cor){
    Produto2.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto2.prototype);
//Porém ele está mostrando que quem criou foi Produto
//sendo que essa instancia é de Camiseta e não produto.
//então linkamos o construtor correto.
Camiseta.prototype.constructor = Camiseta;

//podemos também sobreescrever os métodos da 'PAI'

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const camiseta = new Camiseta('Regata', 15.99, 'preta');

console.log(camiseta.aumento(100));
console.log(camiseta);

function Caneca(nome, preco, material, estoque){
    Produto2.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number')return;
            estoque = valor;
        }
        
    })

}
Caneca.prototype = Object.create(Produto2.prototype)
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('canequinha', 12.99, 'porcelana',4);

//setter
caneca.estoque = 12;

console.log(caneca.estoque)
console.log(caneca);