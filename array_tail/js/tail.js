console.log('JS OK')

// 1 - chiedere all'utente quanti numeri vuole da 1 a 100
// 2 - stampare gli ultimi 5 numeri
// 3 - verificando che sono piu' di 5 e non meno di 1 o piu di 100
// 4 - chiediamo quanti elementi dobbiamo stampare







const input = document.getElementById('input');
const button = document.getElementById('button');
const form = document.getElementById('form');
const result = document.getElementById('result');
const error = document.querySelector('.invalid-feedback');

console.log(input, button, form, result, error);



button.addEventListener('click', function(){

    const quantityNumber = []

    if(isNaN(input.value) || input.value < 1 || input.value > 100){
        input.classList.add('is-invalid');
        return;  
    }else{

        input.classList.remove('is-invalid');
        for(let i = 0; i < input.value; i++){
            const number = Math.floor(Math.random() * 100) + 1;
           quantityNumber.push(number)
        };
        console.log(quantityNumber)

        
       
       
    }
        
    let numElementiDaStampare = parseInt(prompt("Inserisci il numero di elementi da stampare (massimo " + input.value + "):"));

    numElementiDaStampare = Math.min(numElementiDaStampare, input.value);

    result.innerText = quantityNumber.slice(-numElementiDaStampare);

    
});


    