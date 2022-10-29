// How to make loops

let list = [12, 23, 43, 54, 45, 65, 7];

console.log(list)

// This is how you count to 5
for (let i=1; i<=5; i++) {
    console.log('i is ', i);
}

// Loop through list with index value
for (index in list) {
    console.log('the index is '+ index);
    console.log('the value for this index is '+ list[index]);
}

// Loop through list with array values
for (value of list) {
    console.log('value is '+ value);
}

// Exemplo de Tabuada
for (let i=1; i<=10; i++) {
    for (let k=1; k<=10; k++) {
        console.log(i+' x '+k+' = '+ i*k);
    }
}

// This is how a while loop works
let j = 1;
while(j<=5) {
    console.log('j value is '+j);
    j++;
}

// This is a data method loop

list.forEach(function(value, index) {
    console.log('The index is '+index
    +'. The value is ' +value);
});

list.forEach((value, index) => {
    console.log('The index is '+index
    +'. The value is ' +value);
});