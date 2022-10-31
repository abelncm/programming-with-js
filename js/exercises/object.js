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
function giveMePhoneNumberWithPhoneBook(phoneBook, name) {
    if(phoneBook[name] == undefined){
        return 'The name '+name+ ' is not registered!';
    }
    return phoneBook[name];
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
function DeletePhoneWithPhoneBook(phoneBook, name){
    delete phoneBook[name];
    return phoneBook;
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
        return DeletePhoneWithPhoneBook(name);    
    }
    else if (operation == 'ADD'){
        return AddPhoneNumberWithPhoneBook(name,number);        
    }
    else if (operation=='GET'){
        return giveMePhoneNumberv2(name);
    }
}

// Manage a phone book
// return Phone Book
//Operation values ("GET","ADD","DELETE")
let phoneBook = {
    Abel: 5802943,
    Laura: 9761405,
    Lisa: 5850628,
    Adilson: 9240912,
    Victor: 9519228
}

function ManagePhoneBookFunctionV2(name, number, operation) {    
    if (operation=='DELETE'){
        phoneBook = DeletePhoneNumber(name, phoneBook);    
    }
    else if (operation == 'ADD'){
        phoneBook = AddPhoneNumber(name, number, phoneBook);        
    }
    else if (operation=='GET'){
        return giveMePhoneNumberWithPhoneBook(name, phoneBook);
    }
    return phoneBook;
}

