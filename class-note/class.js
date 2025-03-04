//생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person('captain', 25);

//클래스 생성자
class Person {
  constructor(name, age) {
    console.log('generate');
    this.name = name;
    this.age = age;
  }
}

let seho = new Person('seho', 25);
console.log(seho);
