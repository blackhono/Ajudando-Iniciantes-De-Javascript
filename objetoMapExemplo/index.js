const pessoas = [
    { id: 4, nome: 'Diego'},
    { id: 3, nome: 'Nicole'},
    { id: 2, nome: 'Soma'},
    { id: 1, nome: 'Rin'},
]

const novasPessoas = {}

for(const {id, nome} of pessoas ){
    novasPessoas[Number(id)] = { id, nome };
}

console.log(novasPessoas);

//agora se tiver muitas chaves para abstrair, é mais simples
//fazer desta maneira

/* 
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }
}

*/

// Nesse exemplo tem dois problemas o indice virou string e além disso mudou a ordem do meu array...
//resultado:
/* 
{         resultado:                        Correto:
  '1': { id: 1, nome: 'Rin' },      { id: 4, nome: 'Diego' },
  '2': { id: 2, nome: 'Soma' },     { id: 3, nome: 'Nicole' },
  '3': { id: 3, nome: 'Nicole' },   { id: 2, nome: 'Soma' },
  '4': { id: 4, nome: 'Diego' }     { id: 1, nome: 'Rin' }
}
*/

//Para resolver mudaremos de um objeto para um MAP!


const pessoasMap = [
    { id: 3, nome: 'Nicole'},
    { id: 2, nome: 'Soma'},
    { id: 1, nome: 'Rin'},
]

const novasPessoasMap = new Map();
for (let pessoa of pessoasMap) {
    const { id } = pessoa;
    novasPessoasMap.set(id, {...pessoa});
}
console.log(novasPessoasMap.get(3));

//E caso queira mudar algo
console.log(novasPessoasMap.set(3,{id:3, nome:'Oromar'}));

/* for(const {id, nome} of pessoasMap ){
    novasPessoasMap.set(id, {id, nome})
}
 */