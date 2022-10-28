console.log('exercise')

// var myList = [4,12,345,6546,23]

// console.log(myList)

function multiplyArrayItemsBy(myList, multiplyNumber) {
    for (pos in myList) {
        myList[pos] = myList[pos] * multiplyNumber;
    }

    return myList;
}

// multiplyArrayItemsBy([2,1,4], 2)

function sayHello(name) {
    // let greetingText = 'Hello! How are you today ' + name + '?';
    let greetingText = `Hello! How are you today ${name}?`;
    return greetingText;
}

function addToArrayItems(myList, appendValue) {

    let total = 0;

    for (pos in myList) {
        total += value
        myList[pos] = myList[pos] + appendValue;
    }

    return myList;
}

function listCalculation(myList, operator) {
    let total = myList[0];

    if (operator == '+') {
        for (var i = 1; i < myList.length; i++) {
            total += myList[i];
        }

    } else if (operator == '-') {
        for (var i = 1; i < myList.length; i++) {
            total -= myList[i];
        }
    } else if (operator == '*') {
        for (var i = 1; i < myList.length; i++) {
            total *= myList[i];
        }
    } else if (operator == '/') {
        for (var i = 1; i < myList.length; i++) {
            total /= myList[i];
        }
    }

    return total;

}

function simpleCalculation(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '*') {
        return num1 * num2;
    } else if (operator == '/') {
        return num1 / num2;
    }
}

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
}

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
    return 'Name not found!';
}





// ['How', 'Are you today', 'Hi']