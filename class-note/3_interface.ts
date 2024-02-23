interface User {
  age: number;
  name: string;
}

//변수에 활용한 인터페이스
let seho: User = {
  age: 33,
  name: 'seho',
};

//함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user);
};

getUser(seho);

//함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
  (a: number, b: number): number;
}

let sum: sumFunction;
sum = function (a: number, b: number) {
  return a + b;
};
sum(1, 2);

//인덱싱
interface stringArray {
  [index: number]: string;
}

let arr3: stringArray = ['a', 'b', 'c'];
console.log(arr3[0]);

//딕셔너리 패턴
interface stringRegexDictionary {
  [key: string]: RegExp;
}

let obj2: stringRegexDictionary = {
  // sth: /abc/,
  //css파일을 모두 가져오는 정규식
  cssFile: /|.css$/,
  //js파일을 모두 가져오는 정규식
  jsFile: /|.js$/,
};
console.log(obj2);
Object.keys(obj).forEach(function (value) {
  value;
});

//인터페이스 확장(상속)
interface Person {
  name: string;
  age: number;
}

//extends 키워드로 Person을 상속
interface Developer extends Person {
  language: string;
}

let mk: Developer = {
  language: 'ts',
  age: 25,
  name: 'mingyu',
};
console.log(mk);
