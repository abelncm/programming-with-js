console.log('exercise')

// var myList = [4,12,345,6546,23]

// console.log(myList)

function multiplyArrayItemsBy(myList, multiplyNumber) {
    for(pos in myList) {
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

    for(pos in myList) {
        total += value
        myList[pos] = myList[pos] + appendValue;
    }

    return myList;
}

function listCalculation(myList, operator) {
    let total = myList[0];
    
    if(operator == '+') {
        for(var i=1; i<myList.length; i++) {
            total += myList[i];
        }

    } else if (operator == '-') {
        for(var i=1; i<myList.length; i++) {
            total -= myList[i];
        }
    } else if (operator == '*') {
        for(var i=1; i<myList.length; i++) {
            total *= myList[i];
        }
    } else if (operator == '/') {
        for(var i=1; i<myList.length; i++) {
            total /= myList[i];
        }
    }

    return total;

}


['How', 'Are you today', 'Hi']