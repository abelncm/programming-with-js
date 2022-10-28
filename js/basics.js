
var name = 'Joana';
var age = 99;
var isMarried = true;
var date = new Date();
var list = [12, 23, 43, 54, 45, 65, 7];

var obj = {
    name: 'Maria',
    age: 77,
    isMarried: false
}

function printVars() {
    console.log(name);
    console.log(age);
    console.log(isMarried);
    console.log(date);

    console.log(list);
    console.log(list[1]);

    console.log(obj);
    console.log(obj.name);
    console.log(obj['name']);
}

printVars();

function sum(a, b) {
    var total = a + b;
    return total;
}

function subtraction(a, b) {
    var total = a - b;
    return total;
}

var to = sum(9, 5);

// name += ' Tomorrow is friday' + ', the day after tomorrow is saturday'
// age--;
// console.log(age);
// age++;
// console.log(age);


if(name == 'Vanessa' || name=='Joana')
    console.log('Hi '+name+ '!');
else if (age==66 || age==88 || age==99)
    console.log("xxxxxxxxxxxxxxxxxx")
else
    console.log(
        "You're not Vanessa, your age is not 66");


console.log('FOREACH');
// list.forEach(function(value, index) {
//     console.log('The index is '+index
//     +'. The value is ' +value);
// });

list.forEach((value, index) => {
    console.log('The index is '+index
    +'. The value is ' +value);
});

var list = [12, 23, 43, 54, 45, 65, 7];
console.log(list)

for (index in list) {
    console.log('Index is '+ index);
}

for (value of list) {
    console.log('Value is '+ value);
}

for (var i=1; i<=10; i++) {
    for (var k=1; k<=10; k++) {
        console.log(i+' x '+k+' = '+ i*k);
    }
}

var j = 1;
while(j<=5) {
    console.log('Hi!');
    j++;
}

// console.log(  );

// console.log(name);
// console.log(to);
// console.log(sum(2, 0));
// console.log(subtraction(2, 1));
// console.log(subtraction(9, 5));

// printVars();
