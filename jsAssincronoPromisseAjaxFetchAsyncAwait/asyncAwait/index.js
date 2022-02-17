// no async await temos 3 estados que é pendente (quando foi feita a requisição mas não deu tempo dela
// ser resolvida). Temos também a prenchida (que é quando temos ela feita e OK). Por fim temos 
// reject (para quando ocorre um erro e não foi possivel concluir).

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(TypeError('Bad value'));
                return;
            }
            resolve(msg.toUpperCase() + ' OK ');
        }, tempo);

    });
}

/* esperaAi('Fase 1', rand(0, 3))
    .then((valor) => {
        console.log(valor);
        return esperaAi('Fase 2', rand(0, 3));
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand(0, 3));
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => {
        console.log(e)
}) */

//transformaremos isso em async/await

async function executa() {
    try{

        const fase1 = await esperaAi('Fase 1', rand(0, 3))
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', rand(0, 3))
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand(0, 3))
        console.log('terminamos na ', fase3)
    } catch(e){
        console.log(e);
    }
}

executa();
