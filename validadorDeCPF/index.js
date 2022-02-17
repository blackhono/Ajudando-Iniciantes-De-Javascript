/* 
let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '');

Array.from(cpfLimpo);

console.log(cpfArray.reduce((ac, val) => ac + Number(val)));


 */


// 705.484.450-52

/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 -  (237 % 11) = 5 (primeiro dígito)

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro dígito)
se o número digito for maior q 9 consideramos 0.


*/

function ValidaCPF(cpfEnviado){
    
    //propriedade com método de limpeza de caracteres
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g,'');
        }
    })


}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencial())return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    console.log(cpfParcial);
    const digito1 = this.criaDigito(cpfParcial);
    console.log('ValidaCPF-prototype-valida : '+digito1)
    const digito2 = this.criaDigito(cpfParcial+digito1);
    console.log('ValidaCPF-prototype-valida 2 : '+digito2)
    const novoCPF = cpfParcial+digito1+digito2;
    console.log('CPF CALCULADO '+ novoCPF);
    return novoCPF === this.cpfLimpo;
}

//precisamos criar os dois digitos e verificar o numero com 
//nenhum dos ultimos criados e depois com um deles 

ValidaCPF.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
  console.log(cpfParcial)
  let regressivo = cpfArray.length+1;
  console.log(regressivo);
  const total = cpfArray.reduce((ac, val) => {
    console.log(regressivo, val, regressivo*val);
    //por segurança é melhor garantir que seja um Number
    ac += Number(val) * regressivo;
    regressivo--;
    return ac;
  },0);
  console.log(total);

  const digito = 11 - (total % 11);
  console.log(digito);
  
  return digito > 9? '0': String(digito); 
  
}


ValidaCPF.prototype.isSequencial = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}


//como o calculo do cpf utiliza de multiplicação e resto %
//fique atento a passagem de manipulação de dados em 111.111.111
//const cpf = new ValidaCPF('111.111.111-11');

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo);

//objeto criado com o this dos argumentos enviados
console.log(cpf.valida());



