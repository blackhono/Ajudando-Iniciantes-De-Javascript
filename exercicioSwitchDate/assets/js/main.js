const h1Data = document.querySelector('.container h1');

const getData = (()=>{
    let data = new Date();
    let op = {
        dateStyle: 'full',
        timeStyle: 'short'
    };
    return data.toLocaleString('pt-BR', op);
})

h1Data.innerHTML = getData();

/* caso não exista essa maneira também poderia ter criado uma lista 

mes = getNomeMesTexto(data.getMonth());

getNomeMesTexto(mes);

function getNomeMesTexto(numeroMes){
const meses = ['janeiro','fevereiro'...]
return meses[numeroMes]


*/

/* const h1Data = document.querySelector('.container h1');
function getData(){
    let data = new Date();
        let opcoes = {
            dateStyle: 'full',
            timeStyle:  'short'
            
        };
        return data.toLocaleString('pt-BR', opcoes);
}
h1Data.innerHTML = getData(); */
/*Um jeito const retornaHoraFormatada = (()=>{

    let data = getData();
    let dia, mes;

    dia = getDiaSemanaTexto(data.getDay());
    mes = getNomeMesTexto(data.getMonth());


    return (
        `${dia},${data.getDate()} de ${mes} de ${data.getFullYear()} `+
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
})


const getData = (()=>{

    const data = new Date();

    return data;

})

function zeroEsquerda(num){
    return num >= 10? num : `0${num}`;
}

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto =' Domingo'
            return diaSemanaTexto;
            case 1:
            diaSemanaTexto =' Segunda-feira'
            return diaSemanaTexto;
            case 2:
            diaSemanaTexto =' Terça-feira'
            return diaSemanaTexto;
            case 3:
            diaSemanaTexto =' Quarta-feira'
            return diaSemanaTexto;
            case 4:
            diaSemanaTexto =' Quinta-feira'
            return diaSemanaTexto;
            case 5:
            diaSemanaTexto =' Sexta-feira'
            return diaSemanaTexto;
            case 6:
            diaSemanaTexto =' Sabádo'
            return diaSemanaTexto;
    }
}

function getNomeMesTexto(numeroMes){
    let nomeMesTexto;
    switch(numeroMes){
        case 0:
            nomeMesTexto =' janeiro'
            return nomeMesTexto;
            case 1:
                nomeMesTexto =' fevereiro'
            return nomeMesTexto;
            case 2:
                nomeMesTexto =' março'
            return nomeMesTexto;
            case 3:
                nomeMesTexto =' abril'
            return nomeMesTexto;
            case 4:
                nomeMesTexto =' maio'
            return nomeMesTexto;
            case 5:
                nomeMesTexto =' junho'
            return nomeMesTexto;
            case 6:
                nomeMesTexto =' julho'
            return nomeMesTexto;
            case 7:
                nomeMesTexto =' agosto'
            return nomeMesTexto;
            case 8:
                nomeMesTexto =' setembro'
            return nomeMesTexto;
            case 9:
                nomeMesTexto =' outubro'
            return nomeMesTexto;
            case 10:
                nomeMesTexto =' novembro'
            return nomeMesTexto;
            case 11:
                nomeMesTexto =' dezembro'
            return nomeMesTexto;
    }
}




h1Data.innerHTML = retornaHoraFormatada(); */