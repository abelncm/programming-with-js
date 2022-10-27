
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name=name;
        this.#age=age;
    }
    name() {
        return this.#name;
    }
    age() {
        return this.#age;
    }
}

let abel = new Person('AbelA', 33)
console.log(abel.name);


function hello() {

    return 'hi';

}


function calc(a, b) {

    return a*b;

}

