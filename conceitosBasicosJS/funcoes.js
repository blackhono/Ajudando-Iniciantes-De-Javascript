//criador do contéudo -- Diego Lepamar dos Santos Dev Front-end

/* 

    Agora veremos alguns conceitos de estrutura e como utilizar funções.
    Pense na função como algo que vai processar algum dado, verificar,
    tratar e muito mais coisas.

*/


function funcao1(){

}
funcao1();

/* 
    Ai temos um corpo basico de função, temos varias maneiras de montar uma função.
    E para chamar a função e ver ela em funcionamento temos que chamar ela.
    No caso da função1 basta colocar 'funcao1();' igual na linha 13.
*/

/* básico */

function funcaoBasica(){
    console.log('Sou uma função básica')
}

/* Function expression */
const funcaoExpression = function(){
    console.log('Sou uma função de expressão')
}

//Arrow Function 

const funcaoArrow = () => { 
    console.log('Sou uma função de seta')
}

funcaoBasica();
funcaoExpression();
funcaoArrow();

/* 
    Em coisas basicas você pode utilizar a que se sentir mais a vontade porém todas
    tem diferenças quando utilizamos para algumas coisas mais avançadas.

    vou mostrar com passagem de parametros agora

*/


let parametro1 = 2;
let parametro2 = 15;



function funcaoBasicaSoma(numero1,numero2){
    return numero1+numero2;
}

/* Function expression */
const funcaoExpressionSoma = function(numero1,numero2){
    return numero1+numero2;
}

//Arrow Function 

const funcaoArrowSoma = (numero1,numero2) => { 
    return numero1+numero2;
}

/* 
    ai basta chamar a função passando os parametros assim:
    funcaoBasicaSoma(10,20);
    funcaoExpressionSoma(30,40);
    funcaoArrowSoma(45,55);
    Funciona igualmente!
    
    Na linha 82,83 e 84 eu só estou fazendo um pouco diferente para mostrar a informação para
    vocês no console.log();

*/


console.log('O resultado da funcão basica de soma: ',funcaoBasicaSoma(10,20));
console.log('O resultado da funcão expression de soma: ',funcaoExpressionSoma(30,40));
console.log('O resultado da funcão de seta de soma: ',funcaoArrowSoma(45,55));



/* 
    bom ai da para vermos os valores... porém sei que perceberam uma diferença entre as funções
    basicas e as com parametros, o RETURN, ele é usado na função para retornar algum valor ou 
    apenas sair da função, dependendo do que você precisar, lembrando que nem sempre uma função
    ira retornar um valor.

*/

/* 

    Quando a função retorna um dado e você quiser armazenalo em uma variavel é bem simples
    também, basta fazer como na linha 105 onde usei a arrow function apenas para representar

*/

    let resultadoDaFuncao = funcaoArrowSoma(60,80);

    console.log('Esse é o valor na minha let resultadoDaFuncao: ', resultadoDaFuncao);

/* 
    Imagino que você já deve ter lidado com algum exercicio que pedisse para 
    somar dois números né, porém alguem vinha na sua função e não passava 
    nenhum parametro então simplesmente quando você olhava o resultado aparecia
    'NaN'(que significa Not A Number, não é um número)
    Ai você prepara aquele IF para combater esse caso porém tem algo bem 
    legal que da para fazer no corpo da função que te ajuda nisso
*/

const funcaoArrowSomaComParametroIniciado = (numero1 = 0,numero2 = 0) => { 
    return numero1+numero2;
}

let somaParametroIniciado = funcaoArrowSomaComParametroIniciado();

console.log('Esse é o resultado da soma com parametro iniciado: ',somaParametroIniciado);

/* 
    E isso pode ser muito util dependendo do que você esteja fazendo,
    e não altera em nada caso a pessoa passe parametros, a conta vai ser 
    feita da maneira como foi pedida;

*/


/* 

    Agora vou mostrar funções com condicionais para que você se acostume
    com varios tipos de estruturas condicionais que vai encontrar por ai.

*/


const condicionais = ((valor)=>{

    //aqui estou perguntando se o tipo do VALOR é um númerico
    //e estou usando === para verificar o tipo.
    if(typeof valor === 'number'){
        console.log('é um número');
    }

    //agora vou fazer um if que caso seja uma letra ele apenas para
    //a função e tem uma maneira maior e uma maior;
    //maior
    if(typeof valor === 'string'){
        return;
    }
    //menor
    if(typeof valor === 'string') return;

    // Eles funcionam igualmente a diferença é que o maior é utilizado
    // quando queremos fazer um código mais longo dentro do corpo do if
    // nesse caso. Então até mesmo se fosse apenas uma soma daria o menor
    // e ficaria assim: 
    // if(typeof valor === 'string') return valor + valor;
    // nesse caso como é uma string ele não vai 'somar' ele vai apenas
    //concatenar

    if(typeof valor === 'string') return valor + valor;
})


/* 
    Isso foi um básico sobre funções espero que ajude!
    Pois além de respirar variaveis nós também respiramos funções!
    
*/