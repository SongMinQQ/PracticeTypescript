// function logText(text){
//   console.log();
//   return text;
// }
// logText(10);
// logText("hi");
// logText(true);

// function logText<T>(text: T) : T{
//   console.log(text);
//   return text;
// }
// //호출하는 시점에 타입을 넘겨줄 수 있는 것이 generic
// logText<string>('하이');

// function logText(text: string){
//   console.log();
//   // text.split('').reverse().join('');
//   return text;
// }
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// const num = logNumber(10);

// function logText(text: string | number){
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

function logText<T>(text: T): T{
  console.log(text);
  // text.split('').reverse().join('');
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);
// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = {
//   value : "10", 
//   selected: false
// };
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = {
  value : "10", 
  selected: false
};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]){
//   // console.log(text.length);
//   text.forEach(function(text){
//     console.log(text);
    
//   })
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T{
  text.length;
  return text;
}
logTextLength('a');
// 정수는 length를 사용할 수 없기 때문에 에러
// logTextLength(10);

// 제네릭 타입 제한 3 - keyof
// ShoppingItem 중 하나만 받겠다고 제한 가능
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
getShoppingItemOption('price');