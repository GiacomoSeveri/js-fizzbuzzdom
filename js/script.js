// 1 Creare in console 100 numeri 
// 2 Sostituire ai divisibile per 3 fizz
// 2 Sostituire ai divisibile per 5 buzz
// 3 Sostituire ai divisibile per 15 fizzbuzz

// prendo l'elemento dal dom
const numberElement = document.getElementById('number')

const listElement = document.createElement('ul')

// creo il ciclo per i 100 numeri
for (let i = 1; i <= 100; i++) {
    console.log (i);
    const listItem = document.createElement('li');
    // sostituisco i divisibili per 3
    if (i % 3 === 0) {
        listItem.append("fizz ");
        listElement.appendChild(listItem);
    };
    // sostituisco i divisibili per 5
    // if (i % 5 === 0) {
        
    // };
    // sostituisco i divisibili per 15
    // if (i % 15 === 0) {
        
    // };
}

