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