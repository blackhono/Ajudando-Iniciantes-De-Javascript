const elementos = [
    {tag:'p', texto:'frase 1'},
    {tag:'div', texto:'frase 2'},
    {tag:'footer', texto:'frase 3'},
    {tag:'section', texto:'frase 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    
    /* sem  desestruturação
    const elem = elementos[i].tag;
    const valor = elementos[i].texto; */

    const tagCriada = document.createElement(tag);
    /// como não á um html em si no texto ex: <p> Diego </p>
    /// podemos usar tagCriada.innerText = texto

    /// como também da para criar um elemento Node Text
    /// let textoCriado = document.createTextNode(texto);
    /// tagCriada.appendChild(textoCriado);
    
    tagCriada.innerHTML = texto;

    div.appendChild(tagCriada);
}


container.appendChild(div);