//import do que eu preciso e também posso renomear o dado que vier
//como em nome, também posso mudar no export usando o AS
import { nome as nomeModulo1, sobrenome, idade, soma, Pessoa } from './modules/modulo1';
import defaultDoModulo from './modules/modulo1';

//css
import './style.css';

/* 
    também podemos importar tudo dessa maneira:
    import * as meuModulo from './modulo1';
    porém assim ele vai trazer meuModulo como um objeto!

    Lembrando que sempre que importamos sem as chaves é sempre o DEFAULT
*/


console.log(soma(1,4));
console.log(nomeModulo1);
console.log(sobrenome);

const p1 = new Pessoa(nomeModulo1, sobrenome);
const p2 = new Pessoa('Nicole', 'Ikeda');

console.log(p1.falar());
console.log(p2.falar());

console.log(defaultDoModulo.modelo, " ", defaultDoModulo.cor,);