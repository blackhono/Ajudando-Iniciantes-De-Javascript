//Função construtora -> objetos
//Função de fabrica -> objetos
//Função construtora -> objetos


function Pessoa(nome, sobrenome){
    //Privados
    const ID = 123456;
    const metodoInterno = (() => {

    })
    //Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = (()=>{
        console.log(this.nome + ':sou um método');
    })
}

const pessoa1 = new Pessoa('Nicole','Lepamar');
const pessoa2 = new Pessoa('Diego','Lepamar');
pessoa2.metodo();