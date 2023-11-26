//Seleziono gli elementi del DOM tramite il loro ID:
const daysEl = document.querySelector('span#days');
const hoursEl = document.querySelector('span#hours');
const minutesEl = document.querySelector('span#minutes');
const secondsEl = document.querySelector('span#seconds');
//Creo una variabile con oggetto Date che utilizzo per rappresentare la data e l'ora di Capodanno:
const newYearsEveDate = new Date( 2024, 0, 1, 0, 0, 0, 0);
console.log(newYearsEveDate);
//Creo una variabile che esegua la funzione al suo interno con un intervallo di un secondo:
const timer = setInterval( function(){
    //Creo una variabile che trovi data e ora attuali:
    const nowDate = new Date();
    //Faccio la differenza tra la scadenza che ho impostato e la data e ore attuali:
    const dateDifference = newYearsEveDate.getTime() - nowDate.getTime();

    secondsEl.innerHTML = Math.floor((dateDifference % (60 * 1000)) / 1000);
    minutesEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    hoursEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysEl.innerHTML = Math.floor((dateDifference / (60 * 60 * 24 * 1000)));
    //Se la differenza è minore o uguale a zero aggiorno un alemento creato all'interno del DOM:
    if ( dateDifference <= 0 ){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'HAPPY 2024!!';
    }

}, 1000);