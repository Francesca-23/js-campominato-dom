
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


//funzione per creare le bombe
function createBombs(){

    let bombArray = []

    while(bombArray.length < 16){

        let bomb = getRandomIntInclusive(1, 99);

        if(!bombArray.includes(bomb)){
            bombArray.push(bomb);
        }
    }

    return bombArray
}

let bombArrayGlobale = createBombs();


//creazione div singolo
function createDiv(elemento, classi, testo){
    let newDiv = document.createElement(elemento);
    newDiv.className = classi;
    newDiv.innerHTML = testo;
    
    return newDiv;
}

let griglia = document.querySelector('.griglia');


//funzione per il livello 1
function facile(){

    let rating = 0;

    for(let i=1; i <= 100; i++){
        griglia = document.querySelector('.griglia');
        let box = createDiv('div', 'box-1', i);
    
        box.addEventListener('click', function(){

            rating++
        
            if(!bombArrayGlobale.includes(i)){
                this.classList.toggle('blu');
                console.log(i);
    
            }else{
                this.classList.toggle('rosso');
                box.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #cd1821;"></i>`
                
                let timer = setTimeout(function(){
                    griglia.innerHTML = ""
                }, 500)

                document.querySelector('.punteggio').innerHTML = `<p>Il tuo punteggio è: ${rating} </p>`
            }
        })
    
        griglia.append(box);
    }
}

//funzione per il livello 2
function medio(){

    let rating = 0;

    for(let i=1; i <= 81; i++){
        griglia = document.querySelector('.griglia');
        let box = createDiv('div', 'box-2', i);
    
        box.addEventListener('click', function(){

            rating++
        
            if(!bombArrayGlobale.includes(i)){
                this.classList.toggle('blu');
                console.log(i);
    
            }else{
                this.classList.toggle('rosso');
                box.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #cd1821;"></i>`
                
                let timer = setTimeout(function(){
                    griglia.innerHTML = ""
                }, 500)

                document.querySelector('.punteggio').innerHTML = `<p>Il tuo punteggio è: ${rating} </p>`
            }
        })
    
        griglia.append(box);
    }
}

//funzione per il livello 3
function difficile(){

    let rating = 0;

    for(let i=1; i <= 49; i++){
        griglia = document.querySelector('.griglia');
        let box = createDiv('div', 'box-3', i);
    
        box.addEventListener('click', function(){

            rating++
        
            if(!bombArrayGlobale.includes(i)){
                this.classList.toggle('blu');
                console.log(i);
    
            }else{
                this.classList.toggle('rosso');
                box.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #cd1821;"></i>`
                
                let timer = setTimeout(function(){
                    griglia.innerHTML = ""
                }, 500)

                document.querySelector('.punteggio').innerHTML = `<p>Il tuo punteggio è: ${rating} </p>`
            }
        })
    
        griglia.append(box);
    }
}

//selezione della difficoltà e generazione della griglia
let select = document.getElementById("select");
let opzione = select.options[select.selectedIndex].value;

select.addEventListener("change", function(){

    opzione = select.options[select.selectedIndex].value;

    if(opzione == 1){
        document.querySelector('#button').addEventListener('click', function(){
            griglia.innerHTML = ""
            facile()
        })
        
            
    }else if(opzione == 2){
        document.querySelector('#button').addEventListener('click', function(){
            griglia.innerHTML = ""
            medio()
        })

    }else if(opzione == 3){
        document.querySelector('#button').addEventListener('click', function(){
            
            difficile()
        })
    }

})
