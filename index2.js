/* function un()
{
    return {
        bar: 'hello'
    };
}
function dos()
{
    return {
        bar: 'hello'}
}
function tres(){
    return {bar: 'hello'}
}

console.log(un());
console.log(dos());
console.log(tres()); */


function Pessoa(nome, idade,estado){
    this.nome = nome;
    this.idade = idade;
    this.estado = estado;

}

var pessoa1 = new Pessoa('fulano',30,'sp');

var pessoa2 = new Pessoa('fulano',30,'sp');

pessoa1.altura = 1.80;
Pessoa.prototype.sexo = 'masculino';

console.log(pessoa1.altura);
console.log(pessoa2.altura);
console.log(pessoa1.altura);
console.log(pessoa2.altura);
