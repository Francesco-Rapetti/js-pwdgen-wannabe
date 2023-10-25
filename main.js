let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstName;
let surname;
let color;
let password;

firstName = promptManager(firstName, 'nome').toLowerCase();
surname = promptManager(surname, 'cognome').toLowerCase();
color = promptManager(color, 'colore').toLowerCase();
password = passwordReinforcer(`${firstName}${surname}${color}`);


let output = `La tua password è: ${password}#${Math.floor(Math.random() * 100)}`;

document.getElementById("title").innerHTML = output;

// controls input fields
function promptManager(input, inputName) {
    while (true) {
        input = prompt(`Inserisci il tuo ${inputName}`);
        if (input == null || input == '') {
            alert(`Non hai inserito un ${inputName}`);
        }
    
        else if (!stringController(input)) {
            alert(`Non sono ammessi numeri nel ${inputName}`);
        }
        
        else {
            return input;
        }
    }
}

// controls if there are numbers in the string
function stringController(input) {
    for (let index = 0; index < input.length; index++) {
        if (input[index] in numbers) {
            return false;
        }
    }
    return true;
}

// adds random upper case characters
function passwordReinforcer(password) {
    let numb = Math.floor(Math.random() * password.length);
    for (let index = 0; index < password.length/2; index++) {
        password = password.substring(0, numb) + password[numb].toUpperCase() + password.substring(numb+1, password.length);
        numb = Math.floor(Math.random() * password.length);        
    }
    return password;
}



