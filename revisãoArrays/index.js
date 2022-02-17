//valor por referencia
//                0         1        2       3         4         5
const nomes = ['Diego', 'Nicole', 'Soma', 'Pedro', 'Eduardo', 'Dercy'];
const novo = nomes;

novo.pop();

console.log(nomes);
console.log(novo);


//rest e spread os dois tem o mesmo operador porém 
//rest é a pratica de pegar o resto
//agora como spread podemos pegar o conteudo e ter uma cópia 
//com apontamento diferente na memória.

const spread = [...nomes]

spread.pop();
console.log(spread);
console.log(nomes);

//também podemos armazenar o valor que foi retirado.

const removido = nomes.pop();

console.log(removido);

// pop trabalha no final do array enquanto shift no começo.

const removido2 = nomes.shift();

console.log(removido2);

//para dicionar no final do array basta usar o push()

nomes.push('Rin', 'Nyu');

console.log(nomes);

//agora quando se fala de adicionar no começo ou remover no começo como no caso do shift
//Muito cuidado pois ao retirar um valor do começo nesse caso esta removendo um indice
//então aquele q era 2 vira 1 e 1 vira 0... 
//[0,1,2,3,4]
//podendo causar problemas de performance por mexer com TODO o array.

nomes.unshift('Hanna');
console.log(nomes);

//quando quero retirar apenas uma parte do array temos o slice.

const slice = nomes.slice(1, -4);

console.log(slice);

//agora para strings podemos usar o split para transformar em array
//muito util quando temos milhares de valores seguidos e seguem uma sequencia.

const nome2 = 'Diego Lepamar dos Santos';
const nome2Split = nome2.split(' ');
console.log(nome2);
console.log(nome2Split);

// agora caso queira unir os elementos de um array em uma string basta usar o join

const nome2Join = nome2Split.join(' ');
console.log(nome2Split);
console.log(nome2Join);







console.log("--------------------- splice ------------------------");









// o splice consegue fazer essas funções e mais um pouco, pois ele retorna um array 
// e não um valor em si como nos anteriores
//sintaxe  nomes.splice(indice, delete, elemento1, elemento2, elemento3...)
const nomesSplice = ['Mauro', 'Julia', 'Guilherme', 'Vitor', 'Lorena', 'Gabriela'];
console.log(nomesSplice);

//como o pop nesse caso.
const removidosSplice = nomesSplice.splice(2, 2);
console.log(removidosSplice);

// podemos fazer um push de um elemento 

nomesSplice.splice(2, 0, 'Intel', 'Jonas');
console.log(nomesSplice);

//também podemos substituir um elemento por outro pegando o valor do antigo.

const substituidos = nomesSplice.splice(2, 2, 'Larissa', 'Alphonse');
console.log(substituidos);
console.log(nomesSplice);

//shift
nomesSplice.splice(0, 1);
console.log(nomesSplice);

//push
nomesSplice.splice(nomesSplice.length, 0, 'Hantaro');
console.log(nomesSplice);

//unshift
nomesSplice.splice(0, 0, 'Lucas');
console.log(nomesSplice);












// Agora trataremos de concatenação de arrays

console.log('------------------ Concatenação de Array -------------------');










const array1 = [1,2,3];
const array2 = [4,5,6];

const arrayConcat = array1.concat(array2);

console.log(arrayConcat);

//Também podemos utilizar o spread operator '...'

const array3 = [...array1, 'Diego', ...array2, ...[10,11,12]];

console.log(array3);









console.log('------------------------- Filter ---------------------------------')














// Agora funções Filter, Map e Reduce. 
// Filter = pega elementos especificos (Sempre retorna um array com a mesma quantidade
// de elementos ou menos)



const num = [4,7,3,20,19,38,49,95,6,0,48];

// como arrow function

const numFilter = num.filter(((valor, indice, array)=>{
    return valor > 10;
}));

console.log(numFilter);

//A maneira mais reduzida possivel sendo a mesma coisa.
/* 
const numFilter = num.filter(v => v > 10);
*/

/* 

//uma maneira
function callbackFilter(valor, indice, array){
    return valor > 10;
} 
const numFilter = num.filter(callbackFilter);
*/

/* 
//função anonima
const numFilter = num.filter(function(v){
    return v > 10;
});
 */

//Busca em um array de objetos

const pessoas = [
    {nome: 'Diego', idade: 30},
    {nome: 'Jonas', idade: 103},
    {nome: 'Saraiva', idade: 64},
    {nome: 'Zeca', idade: 23},
    {nome: 'Lara', idade: 40},
    {nome: 'Pedro', idade: 36},
    {nome: 'Maria', idade: 34},
    {nome: 'Tom', idade: 12},
];

//cada iteração no filter tras um objeto da lista
const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 5
})

console.log(pessoasComNomeGrande);

const pessoasComMaisDeTrintaAnos = pessoas.filter((obj)=>{
    return obj.idade >= 30;
})

console.log(pessoasComMaisDeTrintaAnos);

//endsWith pega o ultimo indice do array (lembrando q string é 'indiciada')

const pessoasQueTerminamComA = pessoas.filter((obj)=>{
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(pessoasQueTerminamComA);










console.log('-------------------------------------- MAP --------------------------------');









// Map = modifica o valor de um array (Não altera o array original, mas retorna
// a modificação)
// Reduce = 

const numeros = [5, 9, 12, 30, 40, 55, 65, 67, 24, 54];

const numerosEmDobro = numeros.map((v)=>{
    return `Os valor original => ${v} valor retornado => ${v*2}`
})

console.log(numerosEmDobro);

//Desafio : 
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave nome do objeto
//adicione uma chave de id em cada objeto

const pessoas2 = [
    {nome: 'Diego', idade: 30},
    {nome: 'Jonas', idade: 103},
    {nome: 'Saraiva', idade: 64},
    {nome: 'Zeca', idade: 23},
    {nome: 'Lara', idade: 40},
    {nome: 'Pedro', idade: 36},
    {nome: 'Maria', idade: 34},
    {nome: 'Tom', idade: 12},
];

const nomes2 = pessoas2.map((obj)=>{
    return obj.nome;
})

console.log(nomes2);

const idades = pessoas2.map((obj)=>{
    return { idade: obj.idade };
})

console.log(idades);

const objComId = pessoas2.map((obj,indice)=>{
    obj.id = indice;
    return obj
})

console.log(objComId);

//lembrando que isso está alterando o objeto original, caso não queira que altere
//basta usar um spread e colocar em outra variavel o conteúdo do objeto

const copiaObjetoIndiceMil = pessoas2.map((obj,indice)=>{
    let newObj = {...obj}
    let id = 1000;
    newObj.id = indice + id;
    return newObj
})

console.log(pessoas2);
console.log(copiaObjetoIndiceMil);













console.log('-------------------------------------- REDUCE --------------------------------');





//Reduce é reduzir um array a um unico elemento (da para fazer filter e map com ele 
//mas não é o ideal)
//Desafios:
//some todos numeros usando (reduce)
//retorne um array de pares (filter)
//retorne um array com o dobro dos valores (map)



const numeros2 = [5,67,8,3,96,95,45,63,87,43,223,34,22];

const total2 = numeros2.reduce((acumulador, valor, indice, array)=>{
    return acumulador += valor;
},0)

console.log(total2)

// exemplo do reduce sendo usado para filter e map.
const total3 = numeros2.reduce((acumulador, valor, indice, array)=>{
    if(valor % 2 === 0){
        acumulador.push(valor);
    }
    return acumulador
},[])

console.log(total3)

const total4 = numeros2.reduce((acumulador, valor, indice, array)=>{
    acumulador.push(valor *2)
    return acumulador;
},[])

console.log(total4)

//Agora da forma correta 
// Retorne a pessoa mais velha:

const pessoas3 = [
    {nome: 'Diego', idade:30},
    {nome: 'Nicole', idade:25},
    {nome: 'Rin', idade:8},
    {nome: 'Nyu', idade:12},
    {nome: 'Dercy', idade:15},
    {nome: 'Pedro', idade:2},
    {nome: 'Eduardo', idade:2},
    {nome: 'Hanna', idade:1},
]

const maisVelho = pessoas3.reduce((a,v)=>{
    if(a.idade > v.idade){
        return a;
    }
    return v;
})

console.log(maisVelho);













console.log('-------------------------------------- UNIÃO DE MAP, FILTER, REDUCE --------------------------------');









//Desafio: retornar o dobro de todos os pares
//filtrar os pares
//dobrar os valores
//reduzir (somando tudo)


const num2 = [2,5,67,8,3,96,95,45,63,87,43,223,34,22];

const numerosPares = num2.filter((v,i,ar)=>{
    return v % 2 === 0;
},[]).map((v,i,ar)=>{
    return v*2
},[]).reduce((a,v,i,ar)=>{
    return a+=v;
},0)

console.log(numerosPares);

//forma mais reduzida disso é

const num3 = [2,5,67,8,3,96,95,45,63,87,43,223,34,22];

const numerosPares2 = num3.filter(v=> v % 2 === 0,[])
.map(v => v*2,[])
.reduce((a,v)=> a+=v,0)

console.log(numerosPares2);









console.log('-------------------------------------- forEach --------------------------------');





//forEach só itera sobre os valores, mesma coisa q o for normal.



const numArray = [1,2,3,4,5,6,7,8,9];
let total6 = 0;

numArray.forEach((valor, indice, array)=>{
    console.log(valor,indice, array);
    total6 += valor;
});

console.log(total6);