
// função factory ela cria objetos.
function pessoal(nome, sobrenome, idade){
     return{
         nome: nome,
         sobrenome: sobrenome,
         idade: idade
        }
}

let pessoa = pessoal("Diego", "Lepamar", 30);