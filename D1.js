/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// I principali datatype di Javascript sono i seguenti: stringhe, numeri, booleani, null e undefined e devono essere inseriti all'interno di una variabile let o const,
// la quale è come se fosse un contenitore dove andiamo a mettere dentro degli oggetti.
// La stringa è una serie di caratteri che si inseriscono in una variabile all'interno di virgolette, possiamo definirle come una descrizione della stessa variabile
// I numeri assegnano un valore ad una variabile quindi lo contrassegnano e non devono essere inserite le virgolette, entrambi quindi sia stringa che numero indicano cosa c'è dentro alla variabile
// I valori booleani indicano due valori TRUE o FALSE sono utili per far prendere decisioni al codice, rappresentano l'affermazione positiva o negativa di una determinata affermazione
// i valori null si inseriscono quando vogliamo lasciare vuota una variabile per eventi futuri di modifica del codice quindi andiamo ad inserire null dopo aver creato una variabile
// Undefined rappresenta una variabile che è stata dichiarata, ma non è stato assegnato un valore.

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myname = 'luca';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let primonumero = 12;
let secondonumero = 20;
console.log('questo è il risultato', primonumero + secondonumero);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log('questo è il risultato', x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myname = 'armagno';
const myname2 = 'test';
// myname2 = 'test';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;
console.log('questo è il risultato', sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();
console.log('questo è il risultato', name1 === name2);
