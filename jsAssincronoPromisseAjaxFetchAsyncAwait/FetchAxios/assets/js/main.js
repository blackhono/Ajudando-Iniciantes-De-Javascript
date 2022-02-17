/* 
fetch('assets/json/pessoas.json')
    .then(response => response.json())
    .then(json => carregaElementosNaPagina(json))
 */

axios('assets/json/pessoas.json')
    .then(response => carregaElementosNaPagina(response.data));

const createElement = (el) => {
    return document.createElement(el)
}

function carregaElementosNaPagina(json) {
    const table = createElement('table');
    for (let pessoa of json) {
        const tr = createElement('tr');
        let td = createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        td = createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);
        td = createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);


        table.appendChild(tr);
    }

    const result = document.querySelector('.resultado');
    result.appendChild(table);
}