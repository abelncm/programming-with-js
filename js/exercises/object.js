console.log('Object exercises');

// Given a phone number
// search and return its owner's name
function whosPhoneNumber(phoneNumber) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    
    for (key in phoneBook) {
        // console.log(key, phoneBook[key]);
        const savedPhoneNumber = phoneBook[key];
        
        if(savedPhoneNumber == phoneNumber)
            return key;
    }
    return 'The phone number '+phoneNumber+ ' is not registered!';
}

// Given a name
// search and return its owner's phone number
// TODO: SIMPLIFY THIS FUNCTION
function giveMePhoneNumber(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    for (key in phoneBook) {
        // console.log(key, phoneBook[key]);
        const savedName = key;
        const savedPhoneNumber = phoneBook[key];
        
        if(savedName == name)
            return savedPhoneNumber;
    }
    return 'The name '+name+ ' is not registered!';

}

// Given a name
// search and return its owner's phone number
// TODO: SIMPLIFY THIS FUNCTION
function giveMePhoneNumberv2(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    //return phoneBook[name];
    if(phoneBook[name] == undefined){
        return 'The name '+name+ ' is not registered!';
    }
    return phoneBook[name];
}

// Given a name
// search and return its owner's phone number
// TODO: SIMPLIFY THIS FUNCTION
function giveMePhoneNumberWithPhoneBook(_phoneBook, name) {
    if(_phoneBook[name] == undefined){
        return 'The name ' + name + ' is not registered!';
    }
    return _phoneBook[name];
}

// Add a new contact
// return phone book with a new contact
// TODO: SIMPLIFY THIS FUNCTION
function AddPhoneNumber(name, number) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    //TO DO
    phoneBook[name]=number;
    return phoneBook;
}

// Add a new contact
// return phone book with a new contact
// TODO: SIMPLIFY THIS FUNCTION
function AddPhoneNumberWithPhoneBook(phoneBook, name, number) {
    phoneBook[name]=number;
    return phoneBook;
}

// Delete a contact
// return phone book
// TODO: SIMPLIFY THIS FUNCTION
function DeletePhoneNumber(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    //TO DO
    delete phoneBook[name];
    return phoneBook;
}

// Delete a contact
// return phone book
// TODO: SIMPLIFY THIS FUNCTION
function DeletePhoneWithPhoneBook(_phoneBook, name){
    delete _phoneBook[name];
    return _phoneBook;
}

// Manage a phone book
// return Phone Book
//Operation values ("GET","ADD","DELETE")
function ManagePhoneBook(name, number, operation) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
    if (operation=='DELETE'){
        delete phoneBook[name];
    
    }
    else if (operation == 'ADD'){
        phoneBook[name]=number;
        
    }
    else if (operation=='GET'){
        return phoneBook[name];
    }
    return phoneBook;
}

// Manage a phone book
// return Phone Book
//Operation values ("GET","ADD","DELETE")
function ManagePhoneBookFunction(name, number, operation) {    
    if (operation=='DELETE'){
        return DeletePhone(name);    
    }
    else if (operation == 'ADD'){
        return AddPhoneNumber(name,number);        
    }
    else if (operation=='GET'){
        return giveMePhoneNumberv2(name);
    }
}

// Manage a phone book
// return Phone Book
//Operation values ("GET","ADD","DELETE")
var phoneBook = {
    Abel: 5802943,
    Laura: 9761405,
    Lisa: 5850628,
    Adilson: 9240912,
    Victor: 9519228
}

function ManagePhoneBookFunctionV2(name, number, operation) {    
    if (operation=='DELETE'){
        phoneBook = DeletePhoneWithPhoneBook(phoneBook, name);    
    }
    else if (operation == 'ADD'){
        phoneBook = AddPhoneNumberWithPhoneBook(phoneBook, name, number);        
    }
    else if (operation=='GET'){
        return giveMePhoneNumberWithPhoneBook(phoneBook,name);
    }
    return phoneBook;
}

function ManagePhoneBookFunctionV3(name, number, _phoneBook, operation) {    
    if (operation=='DELETE'){
        _phoneBook = DeletePhoneWithPhoneBook(_phoneBook, name);    
    }
    else if (operation == 'ADD'){
        _phoneBook = AddPhoneNumberWithPhoneBook(_phoneBook, name, number);        
    }
    else if (operation=='GET'){
        return giveMePhoneNumberWithPhoneBook(_phoneBook,name);
    }
    return _phoneBook;
}

/*var _pbook1 = ManagePhoneBookFunctionV2('Maria', 9857412, 'ADD');
console.log(_pbook1);
var _pbook2 = ManagePhoneBookFunctionV2('Maria', "", 'GET');
console.log(_pbook2);
var _pbook3 = ManagePhoneBookFunctionV2('Maria', "", 'DELETE');
console.log(_pbook3);*/


/*let _pbook={};
console.log("Add Maria");
_pbook = ManagePhoneBookFunctionV3('Maria', 9857412, _pbook, 'ADD');
console.log(_pbook);
console.log("Add Abel");
_pbook = ManagePhoneBookFunctionV3('Abel', 9857412, _pbook, 'ADD');
console.log(_pbook);
console.log("Search for Abel");
let _numero = ManagePhoneBookFunctionV3('Abel', 9857412, _pbook, 'GET');
console.log("GET ",_numero);
console.log("Search for Maria");
_numero = ManagePhoneBookFunctionV3('Maria', "", _pbook, 'GET');
console.log("GET ",_numero);
console.log("Delete Maria");
_pbook = ManagePhoneBookFunctionV3('Maria', "", _pbook, 'DELETE');
console.log(_pbook);*/
