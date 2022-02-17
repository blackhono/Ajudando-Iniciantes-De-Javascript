//uma dica de proteção é colocar a variavel a ser utilizada que não quer que o usuario
//tenha acesso, basta criar dentro do escopo do return

//This é para refenciar uma classe do seu objeto

const criaCalculadora = (() => {
    return{
        display: document.querySelector('.display'),


        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                console.log(this);
            })
            document.onclick = ((e)=>{
                //pega o elemento
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    //usando arrow function meu this não muda... em alguns casos
                    //pode ser necessário usar sem arrow function justamente para
                    //trocar o this.
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.delDisplay();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            }).bind(this);
        },

        /* 
        //outra maneira 
        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    console.log(this);
                    console.log(el.innerText);
                    this.btnParaDisplay(el.innerText);
                }
                
            }.bind(this));
            //aqui this não é o calculadora pois o this é o DOCUMENT que peguei
            //puxando pelo document então eu tenho que dar bind na função
            //entregando o meu this. (assim mantem ele ligado a calculadora)
        }, 
        */

        pressionaEnter(){
            this.display.onkeypress = ((e)=>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            console.log(this.display.value);
            console.log(this);
        },

        clearDisplay(){
            this.display.value='';
        },

        delDisplay(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                //muito cuidado com o eval() olhar doc de dicas.
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e){
                alert('Conta inválida');
                return;
            }
        },

    };
})


const calculadora = criaCalculadora();
calculadora.inicia();