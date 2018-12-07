const myString = 'some string content';

// myString = '23423';

const array: Array<boolStrNum> = ['cat', 'dog', 'fish'];

array.push(myString);
array.push(23423);
array.push(true);
// array.push({});

type boolStrNum = boolean | string | number;

const first = array[0];

function isString(value: any): value is string {
  return typeof value === 'string';
}


if (isString(first)) {
  console.log('is string', first);
}

interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: 'Bob',
};

person.age = 34;

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHello = function (name) {
//   console.log(`Hello ${name} from ${this.name}`);
// }


class User implements Person {
  constructor(public name: string, public age: number) {
  }

  private sayHello(name: string): void {
    console.log(`Hello ${name} from ${this.name}`);
  }
}

class Parent extends User {
  constructor(name: string, age: number = 50) {
    super(name, age);

    // this.sayHello(this.name)
  }
}

const user = new User('Sally', 234);

const parent1 = new Parent('Bob');


interface Login {
  email: string;
  password: string;
}


interface Register extends Login {
  name: string;
  age: string
}
