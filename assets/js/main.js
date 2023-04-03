let array = []

for(let i=0; array.lenght < 16; i++){

    let bomb = Math.floor(Math.random() * 100) + 1;

    if(!array.includes(bomb)){
        array.push(bomb)
    }

    console.log(array)
}

