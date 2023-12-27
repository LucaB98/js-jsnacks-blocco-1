console.log('JS OK');

// 1 - creare 2 array diverse con quantita di elementi diversa
// 2 - aggiungi elementi all'array che ne ha meno fino al raggiungere la stessa quantita dell'altro.


const colors = ['yellow', 'black', 'red']

const numbers = [3, 51, 16, 20, 24, 100, 2, 90, 80, 70]

console.log(colors, numbers)

let diffLen = numbers.length - colors.length
console.log(diffLen)

for(let i = 0; i < diffLen; i++){
    colors.push(numbers[i]);
    console.log(colors)
}