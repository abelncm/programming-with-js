console.log('exercise')

// var myList = [4,12,345,6546,23]

// console.log(myList)


function multiplyArrayItemsBy(myList, multiplyNumber) {

    for(pos in myList) {
        myList[pos] = myList[pos] * multiplyNumber;
    }

    return myList;
}