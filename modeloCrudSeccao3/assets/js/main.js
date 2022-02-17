const crudPage = (()=>{

    const inputTarefa = document.querySelector('.input-tarefa');
    const btnAddTarefa = document.querySelector('.btn-add-tarefa');
    const ulTarefas = document.querySelector('.tarefas');

const createElement = ((el)=>{
    const element = document.createElement(el);
    return element;
})


const criaTarefa = ((text)=>{
    let li = createElement('li');
    let buttonRemove = createElement('button');
    buttonRemove.innerText='Apagar';
    buttonRemove.setAttribute('class', 'apagar');
    buttonRemove.setAttribute('title', 'Apagar esta tarefa');
    li.innerText = text;
    li.appendChild(buttonRemove);
    ulTarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
})

const limpaInput = (()=>{
    inputTarefa.value='',
    inputTarefa.focus();
})

inputTarefa.onkeydown = ((key)=>{
    if(key.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        
    }
})

btnAddTarefa.onclick = (()=>{
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

document.onclick = ((e)=>{
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

const salvarTarefas = (()=>{
    let liTarefas = ulTarefas.querySelectorAll('li');
    let listaDeTarefas = [];
    
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON= JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON);
    
})


const adicionaTarefasSalvas = (()=>{
    let tarefas = localStorage.getItem('tarefas');
    let listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
})

adicionaTarefasSalvas();
})

crudPage();