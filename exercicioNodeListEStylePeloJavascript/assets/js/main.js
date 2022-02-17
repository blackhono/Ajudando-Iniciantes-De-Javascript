const paragrafos = document.querySelector('.paragrafos');
 
// nodeList se comporta como um array mas não é um array
 //ele faz parte do DOM.

 const ps = paragrafos.querySelectorAll('p');


 const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

 for(let p of ps){
     //p.appendChild(backgroundColorBody);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#FFF";
 }

 ps[1].innerText = 'eita lasqueira'