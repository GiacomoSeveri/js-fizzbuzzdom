// 1 Creare in console 100 numeri 
// 2 Sostituire ai divisibile per 3 fizz
// 2 Sostituire ai divisibile per 5 buzz
// 3 Sostituire ai divisibile per 15 fizzbuzz

// prendo l'elemento dal dom
const numberElement = document.getElementById('number')

const dis3Element = 'fizz';
const dis5Element = 'buzz';
const dis15Element = 'fizzbuzz';

// creo il ciclo per i 100 numeri
for (let i = 1; i <= 100; i++) {
    
    // sostituisco i divisibili per 15
    if (i % 3 === 0 && i % 5 === 0) {

        console.log(dis15Element);

    } 
    // sostituisco i divisibili per 5
    else if (i % 5 === 0) {

        console.log(dis5Element);

    } 
    // sostituisco i divisibili per 3
    else if (i % 3 === 0) {   

         console.log(dis3Element);

    } 
    // non sostituisco ninete 
    else {

        console.log(i);

    };

}

