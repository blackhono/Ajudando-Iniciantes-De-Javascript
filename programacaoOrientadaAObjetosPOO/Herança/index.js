class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado)return;
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado)return;
        this.ligado = false;
    }
}


const d1 = new DispositivoEletronico('qualquer produto eletronico');
d1.ligar();
console.log(d1);

//especialização para realizar a herança 

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.vibrar = false;
        this.cor = cor;
        this.modelo = modelo;
    }

    ligarVibracall(){
        if(this.vibrar)return;
        this.vibrar = true;
    }

    desligarVibracall(){
        if(!this.vibrar)return;
        this.vibrar = true;
    }
}

const c1 = new Smartphone('Samsung', 'Azul', 'Galaxy S4');

console.log(c1);
c1.ligar();
console.log(c1);
c1.ligarVibracall();
console.log(c1);
