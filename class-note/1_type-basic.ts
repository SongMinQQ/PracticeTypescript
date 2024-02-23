//문자열, 정수형
let str: string = 'hello';
let num: number = 10;

//배열 선언, 배열 element 타입 설정
let arr: Array<number> = [1, 2, 3];
let arr2: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

//TS 튜플
let address: [string, number] = ['gangnam', 100];

//TS 객체
let obj: object = {};

//객체 간단히
let person: object = {
  name: 'capt',
  age: 100,
};

//객체 요소까지 자세히 타입지정
let person2: { name: string; age: number } = {
  name: 'thor',
  age: 1000,
};

//TS 진위값
let show: boolean = true;

//빨간줄 꼴뵈기싫어서 없애기
console.log(str, num, arr, arr2, items, address, obj, person, person2, show);
