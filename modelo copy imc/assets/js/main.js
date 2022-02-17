const form = document.querySelector('.form');

const a = ((event) => {
    
    event.preventDefault();
    const inputPeso =  event.target.querySelector('.peso');
    const inputAltura =  event.target.querySelector('.altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso || !altura){
        setResultado('peso ou altura invalido', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} ( ${nivelIMC} )`;

    setResultado(msg, true);


    function getNivelIMC(imc){
        let nivel = ['Abaixo do peso','Peso Normal', 'Sobrepeso',
         'obesidade grau 1','obesidade grau 2','obesidade grau 3'];

        if(imc >= 39.9) return nivel[1];

        if(imc >= 34,9) return nivel[2];
        
        if(imc >= 29,9) return nivel[3];
        
        if(imc >= 24,9) return nivel[4];
        
        if(imc >= 18,5) return nivel[5];
    }


    function getIMC(peso, altura){
        let imc = peso/altura * 2;
        return imc.toFixed(2);
    }

    
    function criaP(){
        const p = document.createElement('p');
        return p;
    }
    
    
    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if(isValid){
            p.classList.add('paragrafo-resultado');
        }else{
            p.classList.add('bad');
        };

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

})

form.addEventListener('submit', a);


/* meu jeito // function imc(){

    const form = document.querySelector('.form');

    function calculoImc(event){
        event.preventDefault();
        const resultado = document.querySelector('.resultado');
        const peso =  form.querySelector('.peso');
        const altura =  form.querySelector('.altura');
        

        let result = peso.value/((altura.value/100)*(altura.value/100));

        if(result <= 18,5){

        } else if(result <= 20){

        } else if(result <= 22){

        } else if(result <=30){

        }

        resultado.innerHTML = `<p>${result}</p>`
    }

    form.addEventListener('submit', calculoImc);


}


imc(); */