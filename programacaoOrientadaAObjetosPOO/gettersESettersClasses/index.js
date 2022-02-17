class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 100)return;
        this.velocidade++;
    }

    freiar(){
        if(this.velocidade <= 0)return;
        this.velocidade--;
    }

}


const carro1 = new Carro('Celta');


//Digamos que alguem venha e set a velocidade por fora fazendo um
// carro.velocidade=1500, seria um problema... então usaremos symbol
//que é uma propriedade privada para q quem esteja de fora (outro programador)
//não quebre o código.

const _velocidade = Symbol('velocidade');

class Carro2{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar(){
        if(this[_velocidade] >= 100)return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0)return;
        this[_velocidade]--;
    }

}


const carro2 = new Carro2('Celta 2');

// ainda tem meios de acessar por fora porém é muito mais trabalhoso. 
// Então acaba protegendo.

//porém podemos transformar em um get e set para ser mais seguro ainda
//pois como set e get são metódos da para avaliar o valor que vem.

const _velocidade2 = Symbol('velocidade2');

class Carro3{
    constructor(nome){
        this.nome = nome;
        this[_velocidade2] = 0;
    }

    get velocidade(){
        return this[_velocidade2];
    }

    set velocidade(valor){
        if(typeof valor != 'number')return;
        if(valor >= 100 || valor <= 0)return;
        return this[_velocidade2] = valor;
    }

    acelerar(){
        if(this[_velocidade2] >= 100)return;
        this[_velocidade2]++;
    }

    freiar(){
        if(this[_velocidade2] <= 0)return;
        this[_velocidade2]--;
    }

}


const carro3 = new Carro3('Celta 2');

carro3.velocidade = 10;
console.log(carro3.velocidade);


//mais um exemplo de set e get usando pessoa

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        //separei em arrays
        valor = valor.split();
        //peguei o primeiro valor do array
        this.nome = valor.shift();
        //e todo restante fica como sobrenome então transformo
        // o resto do array em string após o primeiro elemento  de espaço ' ' 
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Diego', 'Lepamar dos Santos');

console.log(p1.nomeCompleto);

p1.nomeCompleto = 'Diego Lepamar dos Santos'
console.log(p1.nomeCompleto);