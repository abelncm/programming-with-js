console.log('List exercises');

// Given a list of numbers multiply each value by the given number 
// and return the resulting modified list
function multiplyArrayItemsBy(myList, multiplyNumber) {
    for (pos in myList) {
        myList[pos] = myList[pos] * multiplyNumber;
    }

    return myList;
}

// Given a list of strings concatenate each value by the given string 
// and return the resulting modified list
function addToArrayItems(myList, appendValue) {
    let total = 0;
    for (pos in myList) {
        total += value
        myList[pos] = myList[pos] + appendValue;
    }
    return myList;
}

// Given a list of numbers and an operator (string value of +,-,*,/)
// do a total calculation of the list values and return the result
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

// Given a list of strings find and return the longest string
function longestStringInArray(myList) {
    let maxSizeFound = 0;
    let longestString;
    
    for(index in myList) {
        const stringSize = myList[index].length;
        
        if(stringSize > maxSizeFound) {
            maxSizeFound=stringSize;
            longestString=myList[index];
        }
    }
    return longestString;
}