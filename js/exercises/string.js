console.log('String exercises');

// Giver a name return a message with that name included
function sayHello(name) {
    // let greetingText = 'Hello! How are you today ' + name + '?';
    let greetingText = `Hello! How are you today ${name}?`;
    return greetingText;
}

function pintCharacter(){
    let name = 'Zuleica';
    let count =0;
    for(; count<name.length; count++){
        console.log(name[count])
    } 
}

function reverse(name){
    for (let i = name.length-1; i>=0; i--){
        console.log(name[i])
    } 
}

function countVowels (string){
    string = string.toLocaleLowerCase();
    let vowelsCounted = 0
    for(i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" 
        || string[i] == "i" || string[i] == "o"
        || string[i] == "u") {vowelsCounted ++}
    }
    return vowelsCounted
}