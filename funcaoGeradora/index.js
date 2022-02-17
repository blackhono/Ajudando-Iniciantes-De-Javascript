function* geradora1(){

    yield 'valor 1';

    yield 'valor 2';

    yield 'valor 3';

    yield 'valor 4';

    yield 'valor 5';

    yield 'valor 6';

}



const g1 = geradora1();

console.log(g1);
console.log(g1);
console.log(g1);

console.log("eita"+g1.next().value);
console.log("eita"+g1.next().value);
console.log("eita"+g1.next().value);
console.log(g1.next());


for(val of g1){
    console.log(val);
}


//função geradora infinita CUIDADO.
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        ++i;
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);




// Como delegar uma função de uma função geradora para outra

function* geradora3(){

    yield 1;

    yield 2;

    yield 3;


}

function* geradora4(){

    yield geradora3();

    yield 4;

    yield 5;


}


const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

//Da para pegar funções de dentro também.


function* geradora5(){

    yield function(nome){
        this.n = nome;
        console.log(`sou uma função de dentro de uma geradora, dev ${this.n}`);
    };

    yield 'geradora5 valor 1';

    yield 'geradora5 valor 2';


}

const g5 = geradora5();
const func1 = g5.next().value;

func1('Diego');