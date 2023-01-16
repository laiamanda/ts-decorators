/* // Lesson - 01
function Logger(constructor: Function){ // decorator
    console.log('Logging');
    console.log(constructor);
}


@Logger
class Person {
    name = 'Amanda';

    constructor(){
        console.log ('Creating person object...');
    }
    
}

const pers = new Person();
console.log(pers); */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Lesson - 02 - Factories
/* function Logger(logString: string){ // decorator
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    };
}

@Logger('LOGGING - PERSON')

class Person {
    name = 'Amanda';

    constructor(){
        console.log ('Creating person object...');
    }
    
}

const pers = new Person();
console.log(pers); */
// Lesson - 03 
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
        ;
    };
}
//@Logger('LOGGING - PERSON')
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Amanda';
        console.log('Creating person object...');
    }
    Person = __decorate([
        WithTemplate('<h1>My Person</h1>', 'app')
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
