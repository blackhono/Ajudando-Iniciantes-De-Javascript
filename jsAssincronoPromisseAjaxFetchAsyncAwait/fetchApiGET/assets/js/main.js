

document.onclick = ((e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault(); 
        carregaPagina(el);
    }

});


const carregaPagina = async (el) => {
    
    const href = el.getAttribute('href');
    console.log(el);
    console.log(href);

    try{
        const response = await fetch(href);
        if(response.status !== 200)throw new Error('fetch não executado')
        const html = await response.text();
        carregaResultado(html)
    } catch(e){
        console.log(e)
    }


    /*  // transformando em async await
        fetch(href)
        .then(response => {
            if(response.status !== 200)throw new Error('fetch não executado')
             return response.text() 
        })
        .then(text => carregaResultado(text))
        .catch(e => console.log(e))
     */

}

function carregaResultado(response){
     const resultado = document.querySelector('.resultado');
     resultado.innerHTML = response;
}


/* 
fetch('pagina1.html')
.then(resposta => {
    if(resposta.status !== 200)throw new Error('Error')
    return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.log(e))


 */




















/// --------------------------------- MODO ANTIGO SEM PROMISE ------------------------------------

/* 
/// request ou ajax tanto faz no caso
/// com função xhr
const request = obj => {
    const xhr = new XMLHttpRequest();
    
    //verbo http ou método Get

    //   metódo, informação que quer enviar e se é assincrona ou não.
    ///xhr.open('GET', 'U', true)

    // nesse caso estou pegando os parametros pelo obj
    xhr.open(obj.method, obj.url, true);
    //caso fosse um POST seria xhr.send(dados)
    xhr.send();

    xhr.onload = (() => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    })

}


document.onclick = ((e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault(); 
        carregaPagina(el);
    }

});


function carregaPagina(el){
    const href = el.getAttribute('href');
    console.log(el);
    console.log(href);

    request({
        method:'GET',
        url: href,
        success(response){
            carregaResultado(response);
        },
        error(errorText){
            console.log(errorText);
        }
    });

}

function carregaResultado(response){
     const resultado = document.querySelector('.resultado');
     resultado.innerHTML = response;
}
 */


/// mais recente porém tbm antigo

/// request ou ajax tanto faz no caso
/// com função xhr
/* 
const request = obj => {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        
        //verbo http ou método Get
        
        //   metódo, informação que quer enviar e se é assincrona ou não.
        ///xhr.open('GET', 'U', true)
        
        // nesse caso estou pegando os parametros pelo obj
        xhr.open(obj.method, obj.url, true);
        //caso fosse um POST seria xhr.send(dados)
        xhr.send();
        
        xhr.onload = (() => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
        
    })
}

document.onclick = ((e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault(); 
        carregaPagina(el);
    }

});


function carregaPagina(el){
    const href = el.getAttribute('href');
    console.log(el);
    console.log(href);

    const objConfig = {
        method:'GET',
        url: href,
    }
    
    request(objConfig)
    .then(response => {
        carregaResultado(response);
    })
    .catch(error => {
        console.log(error)
    })

}

function carregaResultado(response){
     const resultado = document.querySelector('.resultado');
     resultado.innerHTML = response;
}
 */