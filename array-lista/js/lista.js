console.log('JS OK')

// scaletta

// 1 - prendere gli elementi interessanti
// 2 = creiamo un array con la frutta 
// 3 - aggiungiamo la pesca all array (frigo)
// 4 - verificare la presenza del cocomero nel frigo
//    4a. se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    4b  se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');
const result = document.getElementById('result');
const error = document.querySelector('.invalid-feedback');




const frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frigo.push('pesca');

console.log(frigo);


button.addEventListener('click', function(){
    const fruit = input.value.trim();
    console.log(fruit);

    if (!fruit){
        input.classList.add('is-invalid');
        return;
    };

    let thisFruit = false;

    for(let i = 0; i < frigo.length && !thisFruit; i++){
        console.log('frutta controllata: ', frigo[i]);
        console.log('frutta dell utente: ', fruit);

        if(fruit === frigo[i]){
            console.log('trovata');
            thisFruit = true;
        }
    }

    console.log('frutta trovata: ', thisFruit);

    if(thisFruit){
        button.classList.add('d-none');
        form.classList.add('d-none');
        result.innerText = "Trovato! Devo solo preparare il cocktail.";
    } else {
        input.classList.add('is-invalid');
        error.innerText = "Oh no, devo uscire a comprare il cocomero!";
    }
});
