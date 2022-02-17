//for of é quando não precisar de de pegar o indice e somente o valor

const nomes = ['Diego', 'Nicole', 'Rin', 'Nyu'];


for (let valor of nomes){
    console.log(valor);
}


nomes.forEach((e) => {
    console.log(e);
})

//dica ForEach 'da para pegar valor, indice e array

nomes.forEach((valor, indice, array) => {
 console.log(valor, indice, array);
})
