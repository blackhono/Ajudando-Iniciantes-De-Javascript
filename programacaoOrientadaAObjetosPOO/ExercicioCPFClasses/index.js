class validaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            get: function(){
                return cpfEnviado.replace(/\D+/g,'');
            },

            set: function(cpf){
                return cpf.replace(/\D+/g,'');;
            }
        })
        
    }
    

    valida(){
        if(typeof this.cpfLimpo === 'undefined')return false;
        if(this.cpfLimpo.length !== 11)return false;
        if(this.sequencia())return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial+digito1);
        const novoCPF = cpfParcial+digito1+digito2;
        return novoCPF === this.cpfLimpo;
    }


    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length+1;
        const total = cpfArray.reduce((ac, val) => {
            ac += Number(val) * regressivo;
            regressivo --;
            return ac;
        },0);
        
        const digito = 11 - (total % 11);
        return digito > 9? '0' : String(digito)
    }



    sequencia(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

}

const a = new validaCPF('705.484.450-52');

console.log(a.valida());