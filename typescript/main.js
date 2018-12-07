var myString = 'some string content';
// myString = '23423';
var array = ['cat', 'dog', 'fish'];
array.push(myString);
array.push(23423);
array.push(true);
var first = array[0];
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
    console.log('is string', first);
}
var person = {
    name: 'Bob'
};
person.age = 34;
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// User.prototype.sayHello = function (name) {
//   console.log(`Hello ${name} from ${this.name}`);
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function (name) {
        console.log("Hello " + name + " from " + this.name);
    };
    return User;
}());
