let control;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstName;
let surname;
let color;

firstName = promptManager(firstName, 'nome');
surname = promptManager(surname, 'cognome');
color = promptManager(color, 'colore')

function promptManager(input, inputName) {
    while (!control) {
        input = prompt(`Inserisci il tuo ${inputName}`);
        if (input == null || input == '') {
            alert(`Non hai inserito un ${inputName}`)
        }
    
        else if (!stringController(input)) {
            alert(`Non sono ammessi numeri nel ${inputName}`)
        }
        
        else {
            return input;
        }
    }
}

function stringController(stringa) {
    for (let index = 0; index < stringa.length; index++) {
        if (stringa[index] in numbers) {
            return false;
        }
    }
    return true;
}


let password = `La tua password è: ${firstName}${surname}${color}#${Math.floor(Math.random() * 100)}`;

// console.log(password);
document.getElementById("title").innerHTML = ''+password;
