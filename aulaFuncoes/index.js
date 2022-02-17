falaOi();

// Declaração de função (function hoisting)
function falaOi(){
    console.log('Oi');

}

// Function expression
const souUmDado = function(){
    console.log('sou um dado')
};
souUmDado();

//Arrow Function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

//Dentro de um objeto 
const obj = {
    falar(){
        console.log('estou falando...');
    }
}

obj.falar();