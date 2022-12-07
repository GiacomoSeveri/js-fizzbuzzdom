// 1 Creare in console 100 numeri 
// 2 Sostituire ai divisibile per 3 fizz
// 2 Sostituire ai divisibile per 5 buzz
// 3 Sostituire ai divisibile per 15 fizzbuzz

// prendo l'elemento dal dom
const numberElement = document.getElementById('number')

const fizzElement = 'fizz';
const buzzElement = 'buzz';
const fizzbuzzElement = 'fizzbuzz';

let i = '';

// creo il ciclo per i 100 numeri
for (let i = 1; i <= 100; i++) {
    
    // sostituisco i divisibili per 15
    if (i % 15 === 0) {
        
        numberElement.innerText += fizzbuzzElement;
        console.log(fizzbuzzElement);

    } 
    // sostituisco i divisibili per 5
    else if (i % 5 === 0) {

        numberElement.innerText += buzzElement;
        console.log(buzzElement);

    } 
    // sostituisco i divisibili per 3
    else if (i % 3 === 0) {   

        numberElement.innerText += fizzElement;
        console.log(fizzElement);

    } 
    // non sostituisco ninete 
    else {

        numberElement.innerText += i;
        console.log(i);

    };

}