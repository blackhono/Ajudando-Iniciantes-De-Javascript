const soma = ((x,y) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
    }
    return x + y;
})


console.log(soma(1, 2));




try {
    console.log(soma(1, 2));
    console.log(soma('a', 2));
} catch(err){
    console.log('algo mais amigavel para o usuario')
} finally {
    console.log('FINALLY: sempre sou executado')
}

// por exemplo tambem tem um tratamento de instancia 

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('não é uma instancia de Date.');

    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}


try{

    console.log(retornaHora());
    console.log(retornaHora(new Date()));
    console.log(retornaHora(1));
    
} catch(err){
    //tratar erro
} finally {
    console.log('Tenha um bom dia');
}


