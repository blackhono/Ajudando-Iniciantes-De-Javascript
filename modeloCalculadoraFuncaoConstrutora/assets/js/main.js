//uma dica de proteção é colocar a variavel a ser utilizada que não quer que o usuario
//tenha acesso, basta criar dentro do escopo do return

//This é para refenciar uma classe do seu objeto

function Calculadora(){

        this.display = document.querySelector('.display'),

        this.inicia = (()=>{
            this.cliqueBotoes();
            this.pressionaEnter();
        })

        this.cliqueBotoes= () => {
            document.onclick = ((e)=>{
                //pega o elemento
                const el = e.target;
                //usando arrow function meu this não muda... em alguns casos
                //pode ser necessário usar sem arrow function justamente para
                //trocar o this.this.btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-clear')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.delDisplay();
                if(el.classList.contains('btn-eq')) this.realizaConta();
            }).bind(this);
        }

        /* 
        //outra maneira 
        this.cliqueBotoes = () => {
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

        this.pressionaEnter= () => {
            this.display.onkeypress = ((e)=>{
                if(e.keyCode === 13) this.realizaConta();
            });
        }

        this.btnParaDisplay= (valor) => {
            this.display.value += valor;
            this.display.focus();
        }
        
        this.clearDisplay= () => this.display.value='';
        this.delDisplay= () => this.display.value = this.display.value.slice(0,-1);

        this.realizaConta=()=>{
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
        }


}


const calculadora = new Calculadora();
calculadora.inicia();