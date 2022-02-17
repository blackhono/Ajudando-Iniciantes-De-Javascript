//criador do contéudo -- Diego Lepamar dos Santos Dev Front-end

/* 
    As classes lembram um pouco as functions pois elas são como 'funções especiais'
    e facilitam muito quando precisamos criar objetos ou realizar 'Herança'

*/

/* 
    Corpo de uma classe
*/

class Computador{
    constructor(){

    }
}

/* 

    A classe como podemos ver começa com letra MAIUSCULA e com { } e para
    passarmos alguns parametros usamos o CONSTRUTOR!
    Para utilizar ela temos que chamar elas fazendo uma INSTANCIA (que é
    basicamente você chamando os comportamentos e estados daquela classe).
    Então utilizaremos uma palavrinha nova para chamar ela.
*/

const computador1 = new Computador();

//   O 'new' serve para criar essa instancia única que você quer, 
//   podendo ter varias instancias.

const computador2 = new Computador();

/* 
        Computador1 e Computador2 tem a mesma estrutura porém não significa
        que tem os mesmos valores.

        Vamos realizar uma classe agora para demonstrar o funcionamento.
        Vou usar carro como exemplo pois um carro pode ter COR, MARCA,
        PLACA... muitos atributos que o definem. Vou escolher alguns
        porém caso queira praticar brinque de trocar e tentar implentar outros.


*/
//vou usar aquela tecnica de dar um valor inicial para caso a pessoa não de a informação.
class Carro{
    constructor(marca = 'não informado',modelo = 'não informado', cor = 'não informado'){
        
    //Dentro do construtor nós vamos passar a informação para nossas variaveis
    //porém aqui dentro usaremos uma palavrinha chamada THIS que basicamente
    //ela da contexto para aquele conteudo. (sabe quando você esta conversando
    //com alguem e vc diz: você pegou aquilo? E a outra pessoa sabe o que é 'aquilo'
    //e tras para você. Então ela sabia o contexto. 

    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;

    //vamos colocar um argumento diferente aqui para trabalhar internamente na classe;

    this.velocidadeMax = 0;
    }

    //Agora voltamos ao corpo da classe e graças ao this se quisermos chamar 
    //exatamente aquelas informações nós podemos então bora realizar algo com isso.

    informacoesCarro(){
        let flagMarca= false;
        if(this.marca === 'Fiat'){
            this.velocidadeMax = 200;
            flagMarca=true;
        }
        if(this.marca === 'Ferrari'){
            this.velocidadeMax = 300;
            flagMarca=true;
        }

        if(!flagMarca){
            console.log(`o carro é da marca ${this.marca} e modelo ${this.modelo} da cor ${this.cor}`)
            return;
        }
        console.log(`o carro é da marca ${this.marca} e modelo ${this.modelo} da cor ${this.cor}` +
        `e a velocidade maxima é ${this.velocidadeMax}`)
    }




}


const carro1 = new Carro('Ferrari', 'F40', 'Vermelha')
const carro2 = new Carro('Fiat', 'Uno', 'Branca')

/* 
    Imagino que o contexto ainda não é algo tão claro né. Porém repare que
    o contexto de carro1 é 'marca Ferrari modelo f40 cor vermelha'
    e o contexto do carro2 é 'marca Fiat modelo Uno cor Branca'
    então se eu puxar alguma informação dessas instancias vai ser sempre
    sobre o contexto delas. E para demonstrar isso vamos dar um console.log
    nessas instancias.
*/

console.log(carro1);
console.log(carro2);

/* 
    Viu! Legal né! 
    Bom se vocÊ olhar bem vai reparar que esses carros estão com velocidade maxima
    em 0. Pois isso é apenas o corpo do objeto que montamos dentro do CONSTRUCTOR!
    Então vamos chamar a função informacoesCarro para ver o que acontece.
*/
//este console log vazio é apenas parar dar uma linha no console log.
console.log();
//como meu retorno da função já é um console.log não vou precisar usar aqui.

carro1.informacoesCarro();
carro2.informacoesCarro();


/* 
    Bom acredito que você tenha entendido o básico de classes com isso
    e sua estrutura.
    E para entender como passei valores de variaveis dentro de uma string
    o que eu utilizei é algo chamado 'template literals' onde nós não escrevemos
    a string com "" ou '' mas sim com `` e quando queremos colocar o valor
    da variavel basta usar ${variavel}.
*/


