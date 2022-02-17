function rand(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo,) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(TypeError('Bad value'))
        setTimeout(() => {
            resolve(msg);
        }, tempo);

    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando Dados', rand(3, 5));
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Tratando os dados da base', rand(1, 3));
    })
    .then((resposta)=>{
        console.log(resposta)
        //erro para teste 
        return esperaAi(123456, rand(1, 3));
    })
    .then( () => {
        console.log('Exibe os dados em tela');
    })
    .catch( e => {
        console.log('ERRO:', e);
    });


