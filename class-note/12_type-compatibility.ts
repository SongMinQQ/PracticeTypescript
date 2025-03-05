// interface
interface Developeral {
  name: string;
  skill: string;
}
interface Personal {
  name: string;
}

var developer: Developeral;
var person: Personal;
// developer = new Personal();
// 오른쪽에 있는 타입이 왼쪽의 타입에 갈 수 없음. Developer은 Person에 있는 name:string이 되기 때문
// developer = person;
// 이렇게 하면 developer의 skill:string은 person에 할당할 수 있음
person = developer;

// 함수
var add = function(a: number) {
  // ...
}
var sum = function(a: number, b: number) {
  // ...
}
sum = add;
//add 함수는 파라미터가 1개만 필요한데 sum은 2개가 필요 즉 왼쪽에 있는 파라미터의 타입이 오른쪽의 sum보다 범위가 작다. 호환 불가
add = sum;

// 제네릭
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
// 애넨 타입이 달라도 empty에 든게 없어서 호환이 됨
empty1 = empty2;
empty2 = empty1;
interface NotEmpty<T>{
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// 애넨 그냥 타입이 달라서 호환이 안됨
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;