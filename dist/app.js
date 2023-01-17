// Lesson - 01
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Amanda';
        console.log('Creating person object...');
    }
    return Person;
}());
var pers = new Person();
console.log(pers);
