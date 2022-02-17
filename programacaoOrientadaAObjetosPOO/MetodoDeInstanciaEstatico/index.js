//metodos estaticos estão referidos apenas a classe e não a instancia.
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume+=2;
    }

    diminuirVolume(){
        this.volume-=2;
    }

    //método de instancia
    trocaPilha(){
        console.log('troca pilha 1')
    }
    //método estático
    static trocaPilha2(){
    console.log('troca pilha 2')
    }
}

const c1 = new ControleRemoto('LG');

c1.aumentarVolume();
console.log(c1);

/* 
o método trocaPilha2 não vai aparecer em c1. 
c1.trocaPilha2;
Só vai aparecer na classe
*/

ControleRemoto.trocaPilha2();

//Acessamos o método estático porém não temos acesso aos dados das instancias.


//Um teste legal sobre isso é que podemos montar um metodo dentro da class
//e usar o this para retonar sobre a classe
class Matematica{
    constructor(){
        this.calculo = 0;
        this.contador = 1;
        /* soma(); */
    }
    //Esse this retorna o objeto da classe Matematica
    static soma(x, y){
        console.log(this);
        console.log(this.contador);
        return x+y;
    }
}
// o this aqui vai retornar o objeto do NODE
function soma(x,y){
    console.log(this);
    return x+y;
}

const m = new Matematica();

/* console.log(soma(4,5)); */
console.log(Matematica.soma(4,5));






