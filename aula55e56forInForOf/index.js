const frutas = ['Pera', 'Maça', 'Uva'];

for(let indice in frutas){
    console.log(indice)
}
/* (esse daqui é usado para objetos então o correto seria usar for OF)
Resultado log:
0
1
2

*/



for(let indice of frutas){
    console.log(indice);
}

/* 
Resultado log:

Pera
Maça
Uva

*/

// Exemplo com Objeto

const pessoa = {
    nome: "Diego",
    sobrenome:"Lepamar",
    idade:29
}


for(let chave in pessoa){
    console.log(chave ,' : ', pessoa[chave]);
}

//Nesse caso o of não funciona pois pessoa não é um objeto iteravel (array)
/* 
for(let chave of pessoa){
    console.log(chave);
}
 */