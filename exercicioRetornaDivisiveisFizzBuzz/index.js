// Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número = retorna o proprio número
//Use função com números de 0 a 100



/* const div3ou5 = ((e) => {
    if (typeof e !== 'number') return e;
    
    if (e % 3 === 0 && e % 5 === 0) return 'FizzBuzz';
    if (e % 3 === 0) return 'Fizz';
    if (e % 5 === 0) return 'buzz';
    return e;

})

const numero = 100;
for (let i = 0; i <= numero; i++) {
    console.log(i, div3ou5(i));
} */





// outra solução parecida é:

const div3ou5 = ((e) => {
    let result = '';
    if (typeof e !== 'number') return e;
    
    if (e % 3 === 0) {
        result += 'Fizz';
    }
    if (e % 5 === 0) {
        result += 'Buzz';
    }

    if (e % 3 !== 0 && e % 5 !== 0) {
        return result += e;
    }
    return result;

})

const numero = 100;
for (let i = 0; i <= numero; i++) {
    console.log(i, div3ou5(i));
}
