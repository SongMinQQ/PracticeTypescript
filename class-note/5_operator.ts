//유니온 타입 | 을 사용하여 함수의 특정 파라미터에 2개 이상의 자료형을 받을 수 있게 함
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
// someone.age;
// someone.name;
// }

// askSomeone({ name: 'DEVELOPER', skill: 'develop' });
// askSomeone({ name: 'DEVELOPER', age: 25 });
//인터섹션 타입 : Developer과 Person이 가지고 있는 타입을 모두 포함함
//유니온 타입이 실제로(상대적)는 더 많이 쓰임
//인터섹션은 Developer과 Person을 모두 포함하는 새로운 someone을 가짐
function askSomeone(someone: Developer & Person) {
  someone.age;
  someone.name;
  someone.skill;
}
askSomeone({ name: 'DEVELOPER', skill: 'dev', age: 25 });
// let seho: string | number | boolean;
// let capt: string & number & boolean;
