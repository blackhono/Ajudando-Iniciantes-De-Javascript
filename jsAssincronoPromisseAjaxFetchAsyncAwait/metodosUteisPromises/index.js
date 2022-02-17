function rand(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(TypeError('Bad value'))
        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
//Promise.all realiza todos promises na ordem pedida.


const promises  = [
    'Primeiro valor',
    esperaAi('Promise 1', 2000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 3000),
    'Outro valor'
];

Promise.all(promises)
.then((valor)=>{
    console.log('------------------------Promise All-----------------------------------')
    console.log(valor);
})
.catch(e => {
    console.log("Erro: ", e)
})




//Race retorna a primeira promise resolvida 


Promise.race(promises)
.then((valor)=>{
    console.log('------------------------Promise Race-----------------------------------')
    console.log(valor);
})
.catch(e => {
    console.log("Erro: ", e)
})





function baixaPagina(){
    const emCache = false;
    console.log('------------------------Promise Resolve-----------------------------------')
    if(emCache){
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then((dadosPagina) => {
    console.log(dadosPagina)
})
.catch(e => console.log('Error:', e))



// o promise.reject joga você no erro (catch)

function baixaPagina2(){
    const emCache = true;
    console.log('------------------------Promise Reject-----------------------------------')
    if(emCache){
        return Promise.reject('Pagina em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina2()
.then((dadosPagina) => {
    console.log(dadosPagina)
})
.catch(e => console.log('Error:', e))