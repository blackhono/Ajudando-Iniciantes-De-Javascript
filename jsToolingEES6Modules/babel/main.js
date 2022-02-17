const nome = 'Diego' 
const obj = {
    nome
}

const spreadNome = {...obj};

console.log(spreadNome)

class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false
    }

    carroLigado(){
        console.log(`${this.modelo} está ligado!`)
        this.ligado = true;
    }
}