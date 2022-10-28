
var name = 'Hi Joana, Hi';
var age = 99;
var isMarried = true;
var date = new Date();
var list = [65, 12, 54, 43, 45, 7, 23];

var obj = {
    name: 'Maria',
    age: 77,
    isMarried: false
}

console.log(name.length)
// console.log(name.trim())
console.log(name.substring(2))
console.log(name.substring(2, 4))
console.log(name.substr(2, 3))
console.log(name.slice(1, 3))
console.log(name.substr(-5))
console.log(name.replace('Hi', 'Hello'))
console.log(name.replaceAll('Hi', 'Hello'))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.concat(' Let\'s go'))
console.log(name.charAt(3))
console.log(name.split(' '))
console.log(name.indexOf('Joana')) // -1
console.log(name.includes('Hi'))

console.log(name)
console.log('-------------------------------')

console.log(age.toString())
console.log(Number('100'))
console.log(String(100))
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(new Date('2000-01-01') > new Date('2001-01-01'))

console.log('-------------------------------')
console.log(list)
console.log(list.includes(7))
console.log(list.push(999))
console.log(list.concat([123, 66]))
console.log(list.indexOf(45))
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



for (let x of list.entries()) {
    console.log(x)
}

for (let x of list.keys()) {
    console.log('i',x)
}

console.log(list)


