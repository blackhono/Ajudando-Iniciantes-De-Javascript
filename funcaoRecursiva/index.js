function recursiva(max){
    if(max >= 10) return;

    max++;
    console.log(max);

    recursiva(max)
}

recursiva(-10);


/// sempre se preocupe com onde parar essa função já que
/// pode dar problema (pois pode ser identificado como 
/// loop infinito)

