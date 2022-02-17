//criador do contéudo -- Diego Lepamar dos Santos Dev Front-end

/* 
    A ideia desse contéudo é ajudar na syntax do código e facilitar a compreensão
    sobre como montar uma function, qual tipo de 'variavel' usar
*/

/* 
    Temos muitos tipos de declarações de variaveis. Sempre declaramos variaveis
    com letra minuscula no começo e caso tenha uma junção de mais palavras, a 
    próxima tera a primeira letra maiuscula.
    Quando devo usar Var, Let ou const?

*/

/* 
    O VAR pode redeclarar uma variavel já utilizada então acaba sendo perigoso
    pois você pode acabar alterando algo que não queira.(ou outra pessoa,
        pense que tu pode estar lidando com um dado de Number e alguem declarar novamente
        como um dado de String... problema á vista...)

*/
var nome = 'Diego';
var nome = 'Nicole';

console.log(nome);

/* 
    Se dermos um console.log(nome) aqui teremos o resultado: Nicole.

    Então o que podemos fazer para evitar esse tipo de situação?
    
    Usar LET ou CONST


*/

/* 
    Começaremos pelo CONST que como o nome dele já indica, é uma constante e isso significa
    que não podemos alterar o seu dado (bom tem um jeito mas já já explico como e por que)

*/

const roupa = 'camisa';
// roupa = 'calça';

/* 
        Já vemos uma diferença entre ela e o VAR, que se você tentar 
        usar novamente a declaração 

        const roupa = 'camisa';
        const roupa = 'calça;

        Vai dar problema pois ele identifica que já tem uma constante com esse nome.

        No exemplo que coloquei na linha 42 eu tento passar um dado diferente para
        a const roupa porém isso gera um problema também pois não podemos mudar o tipo
        de dado de algo que é constanste.
        
*/

/* 
        Bom já que VAR não é bom usar e CONST persiste o tipo de dado que tal LET?

*/


let carro = 'Gol';
carro = 'Celta';

console.log(carro);

/* 
        O resultado desse console log é 'Celta'. Ai você me pergunta por que LET não daria problema que nem o VAR
        pois mesmo que você possa alterar o dado, se você tentar criar uma nova 'variavel' com o mesmo nome o LET
        não deixa passar. Vai gerar um erro de 'variavel já declarada'.
        Então não vai ter outra let dentro do escopo com o mesmo nome! (já explico sobre escopo!)

*/

/* 

        Agora que entendemos o básico sobre os tipos de variaveis vamos a alguns exemplos de como utilizar
        de uma maneira correta ok?
        Vou usar uma função para explicar (não precisa entender em si o que é a função o como a usa
        apenas foque nas variaveis).

*/

function brinquedos(){

    const brinquedo1 = 'avião';
    let brinquedo2 = 'carrinho';

    if(brinquedo2 === 'carrinho'){
        let brinquedo2 = 'outro Brinquedo';
        
        console.log(brinquedo2);
    }

    console.log(brinquedo1);
    console.log(brinquedo2);

    /* 
        Bom você já deve estar pensando sobre aqueles dois LET brinquedo2... pois é chegou a hora de falar sobre
        ESCOPO, vou dar um exemplo de como funciona um escopo ok?
        Pensa na sua mesa e imagine que você escreveu um monte de coisas nela e então você vem e cobre parte dela
        com um pano, o pano está por cima certo? Então nele não está escrito tudo que está na mesa. O pano seria
        uma camada a mais. Então se você escrever algo nesse pano você não está escrevendo na mesa em si mesmo que
        o pano esteja por cima!
        O let ele é fantastico justamente por isso, ele é uma variavel de ESCOPO então se dentro de algo você
        precisar utilizar o mesmo NOME você pode (lembre-se não é o mesmo dado se você declarar uma nova let)
        Agora e a const??? Então ela é como a tinta fresca do que você escreveu na mesa, então quando o pano encosta
        nessa parte o pano absorve essa tinta...
        Resumindo a const não pode usar outro nome pois mesmo se tiver sob o outro ele ainda pode ser visto.
        Legal né! 
    */

}

brinquedos();


/* 
    Bom eu avisei antes que tem uma maneira de alterar algo dentro de uma const... isso é um pouco mais complexo
    então preciso que você fique com o conceito na cabeça mas não precisa entender ele de cara ou todo de uma vez
    e para poder fazer isso eu usarei algo que chamamos de OBJETO ou Object que é uma coleção de dados, pense nele
    como se fosse uma arvoré que pode ficar gigante dependendo do que você precisar.
*/

const meuObjeto = {
    ferramenta: 'teclado',
    eletronico: 'mouse',
    usuario: 'Jonas'    
}

console.log(meuObjeto);
/* 
    Nesse objeto temos algo como se fosse 3 variaveis e cada uma com seus dados.
    Quando fazemos o console.log(meuObjeto) a resposta que nós obtemos é:
    { ferramenta: 'teclado', eletronico: 'mouse', usuario: 'Jonas' }

    Agora lembra o que falei sobre a constante? Você não pode alterar... porém...  o meuObjeto em si
    é um tipo OBJECT que é basicamente isso aqui {} então se eu decidir mudar o que tem dentro de um dos dados
    eu não mudei em si o que ele é. Vou te provar isso no proximo console.log()
*/

meuObjeto.ferramenta = 'chave de fenda';
meuObjeto.eletronico = 'tv';
meuObjeto.usuario = 'Diego';

console.log(meuObjeto);


/* 
    Nesse console.log(meuObjeto) de agora o resultado foi esse:
    { ferramenta: 'chave de fenda', eletronico: 'tv', usuario: 'Diego' }
    Viu que legal, o const manteve o tipo mas tambem podemos moldar os dados dentro dele graças a usar Object
    da até mesmo para acrescentarmos algo nele.

*/

meuObjeto.trabalho = 'Desenvolvedor';

console.log(meuObjeto);

/* 
    E esse foi o resultado:
    { ferramenta: 'chave de fenda', eletronico: 'tv', usuario: 'Diego', trabalho: 'Desenvolvedor'}
    
    E com isso você aprendeu alguns conceitos básicos sobre variaveis em Javascript! Parabéns!
    Guarde isso como um material de consulta pois por mais que tenhamos anos de carreira, não conseguimos
    lembrar de tudo que aprendemos toda hora que quisermos, então sempre guarde para poder consultar 
    e retirar duvidas!
*/







