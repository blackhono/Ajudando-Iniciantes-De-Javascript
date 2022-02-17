
const relogio = (()=>{

    const relogioElement = document.querySelector('.relogio');
    const iniciarElement = document.querySelector('.iniciar');
    const pausarElement = document.querySelector('.pausar');
    const zerarElement = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    
    const criaHoraMinSeg = ((s) => {
        let horaVisualizada = new Date(s * 1000);
        return horaVisualizada.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    })
    
    
    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogioElement.innerHTML = criaHoraMinSeg(segundos)
        }, 1000);
    }
    
    
    function cleanElements() {
        relogioElement.classList.remove('pausado');
    }
    
    document.onclick = ((e) => {
        const el = e.target;
        console.log(el);

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            cleanElements();
            iniciarElement.disabled = true;
            pausarElement.disabled = false;
        }
        if (el.classList.contains('pausar')) {
            relogioElement.classList.add('pausado');
            clearInterval(timer);
            pausarElement.disabled = true;
            iniciarElement.disabled = false;
        }
        if (el.classList.contains('zerar')) {
            cleanElements();
            clearInterval(timer);
            iniciarElement.disabled = false;
            pausarElement.disabled = false;
            relogioElement.innerText = '00:00:00';
            segundos = 0;
        }
    })
    
})

relogio();

    /* assim é um por um...
    iniciarElement.onclick = (()=>{
    clearInterval(timer);
    iniciaRelogio();
    cleanElements();
    iniciarElement.disabled = true;
    pausarElement.disabled = false;

})

pausarElement.onclick = (()=>{
    relogioElement.classList.add('pausado');
    clearInterval(timer);
    pausarElement.disabled = true;
    iniciarElement.disabled = false;

})

zerarElement.onclick = (()=>{
    cleanElements();
    clearInterval(timer);
    iniciarElement.disabled = false;
    pausarElement.disabled = false;
    relogioElement.innerText = '00:00:00';
    segundos = 0;
})
 */






