// Javscript data types come with pre-built functions

let name = 'Hi Joana, Hi';
let age = 99;
let isMarried = true;
let date = new Date();
let list = [65, 12, 54, 43, 45, 7, 23];

let obj = {
    name: 'Maria',
    age: 77,
    isMarried: false
}

console.log('name length', name.length)
console.log('remove begining, ending spaces', name.trim())
console.log('get string starting from position 2', name.substring(2))
console.log('get string starting from position 2 and ending at position 4', name.substring(2, 4))
console.log('get 3 characters from string starting from position 2', name.substr(2, 3))
console.log('et string starting from position 1 and ending at position 3', name.slice(1, 3))
console.log('get string starting from ending position 5',name.substr(-5))
console.log('replace first occurrence of', name.replace('Hi', 'Hello'))
console.log('replaces all occurrences of', name.replaceAll('Hi', 'Hello'))
console.log('make string to upper case',name.toUpperCase())
console.log('make string to lower case', name.toLowerCase())
console.log('string concatenation', name.concat(' Let\'s go'))
console.log('get character at position 3',name.charAt(3))
console.log('break string into array, using break parameter value', name.split(' '))
console.log('find the position where the parameter value starts',name.indexOf('Joana')) // -1
console.log('check whether the parameter value is present',name.includes('Hi'))

console.log(name)
console.log('-------------------------------')

console.log('cast number to string from object method',age.toString())
console.log('cast string to number', Number('100'))
console.log('cast number to string',String(100))
console.log('get date year',date.getFullYear())
console.log('get date month', date.getMonth())
console.log('get date day',date.getDate())
console.log('get date hour',date.getHours())
console.log('compare two dates',new Date('2000-01-01') > new Date('2001-01-01'))

console.log('-------------------------------')
console.log(list)
console.log('check if array inclues parameter value',list.includes(7))
console.log('add to array',list.push(999))
console.log('join two array', list.concat([123, 66]))
console.log('find the position of',list.indexOf(45))
console.log('remove last item', list.pop())
console.log('reverse', list.reverse())
console.log('sort', list.sort(function (a, b) { return a - b }))
console.log('slice', list.slice(3, 5))
console.log('remove first item', list.shift())
console.log('toString', list.toString())
console.log('join', list.join('-'))
console.log('unshift', list.unshift(55))
console.log(list)
console.log('list lenght', list.length)

list.map(function (val, i) {
    console.log(i, val)
})

list.forEach(function(value, index) {
    console.log('The index is '+index
    +'. The value is ' +value);
});

list.forEach((value, index) => {
    console.log('The index is '+index
    +'. The value is ' +value);
});


