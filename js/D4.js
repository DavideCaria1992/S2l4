/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
 SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2;
}
console.log("L'area è pari a: " + area(5, 4)) //20


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
 SCRIVI QUI LA TUA RISPOSTA */

function crazySum(c1, c2) {
    if (typeof c1 === "number" && typeof c2 === "number" && !isNaN(c1) && !isNaN(c2) && c1 === c2) {
        return (c1 + c2) * 3;
    } else if (typeof c1 === "number" && typeof c2 === "number" && !isNaN(c1) && !isNaN(c2) && c1 !== c2) {
        return c1 + c2
    }
}

console.log("La prima crazy sum è: " + crazySum(4, 9)) //13
console.log("La seconda crazy sum è: " + crazySum(3, 3)) // 18

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
 SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(cD) {
    const crazyDiffValue = cD - 19
    if (crazyDiffValue >= 0 && crazyDiffValue <= 19) {
        return crazyDiffValue
    } else if (crazyDiffValue > 19) {
        return crazyDiffValue * 3
    }
}

console.log("La prima crazyDiff è: " + crazyDiff(28)) //9
console.log("La seconda crazyDiff è: " + crazyDiff(75)) //168

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
 SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else return false
}

console.log(boundary(12)) //false
console.log(boundary(65)) //true
console.log(boundary(279)) //false
console.log(boundary(400)) //true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
 SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    if (str.slice(0,7) === "Epicode") {
    return  str
    } else return "Epicode" + str
}

console.log(epify(" ciao")) //Epicode ciao
console.log(epify("Epicode buongiorno")) //Epicode buongiorno

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
 SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    if (n % 7 === 0 && n % 3 === 0) {
        return "Il numero è un multiplo sia si 7 che di 3"
    } else if (n % 7 === 0) {
        return "Il numero è un multiplo di 7"
    } else if (n % 3 === 0) {
        return "Il numero è un multiplo di 3"
    } else return "Il numero non è un multiplo né di 3 né di 7"
}

console.log(check3and7(15)) //Il numero è un multiplo di 3
console.log(check3and7(21)) //Il numero è un multiplo sia si 7 che di 3
console.log(check3and7(28)) //Il numero è un multiplo di 7
console.log(check3and7(17)) //Il numero non è un multiplo né di 3 né di 7

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
 SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
 SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
 SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
 SCRIVI QUI LA TUA RISPOSTA */


