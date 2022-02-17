class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.events();
    }

    events(){
        this.formulario.onsubmit = ((e) => { 
            this.handleSubmit(e);
        });
        /* this.formulario.addEventListener('submit', e => {
            console.log('oi');
        }) */
    }

    handleSubmit(e){
        e.preventDefault();
        const valid = this.isValid();
        const passwordValid = this.passwordIsValid();

        if(valid && passwordValid){
            alert('Seu formulário foi enviado com sucesso, obrigado!');
            this.formulario.submit();
        }

    }

    passwordIsValid(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.createError(senha,'Campos senha e repetir senha precisam ser iguais.');
            this.createError(repetirSenha,'Campos senha e repetir senha precisam ser iguais.');
            valid = false;
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            this.createError(senha, 'Campo senha deve conter entre 6 ou 12 caracteres')
            valid = false;   
        }


        return valid;
    }

    isValid(){
        //flag let valid
        let valid = true;

        for(let cleanErrorText of this.formulario.querySelectorAll('.error-text')){
            cleanErrorText.remove();
        }


        for(let campo of this.formulario.querySelectorAll('.validar')){
            //console log só para mostrar todos elementos com classe validar
            console.log(campo);

            let label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.createError(campo, `O campo "${label}" não pode estar em branco`)
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)){
                    valid = false;
                    this.createError(campo,`${label} invalido`);
                }
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)){
                    valid = false;
                }
            }
        }
        
        return valid;
    }

    validaUsuario(campo){
        let usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.createError(campo,`Usuário precisa ter entre 3 a 12 caracteres`);
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo,'Nome de usuário precisa conter apenas letras e/ou números')
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            return false;
        }

        return true;
    }

    createError(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }

}

const valida = new ValidaFormulario();