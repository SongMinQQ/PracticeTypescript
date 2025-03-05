// 타입 추론 기본
var a = "abc";

function getB(b = 10){
  var c = "hi";
  return b + c;
}

// 타입 추론 기본 2
// interface Item<T> {
//   value: T;
//   title: string;
// }

// let shoppingItems: Item<string> = {
//   value: "빈츠",
//   title: "과자"
// }

// 타입 추론 기본 3
interface Item<T> {
  value: T;
  title: string;
}

interface DetailedItem<T> extends Item<T> {
  description: string;
  tag: T;
}
let shoppingItems: Item<string> = {
  value: "빈츠",
  title: "과자"
}
let detailedItem: DetailedItem<number> = {
  title: 'abc',
  description: 'ab',
  value: 3,
  tag: 10
}

// Best Common Type
var arr = [1,2,true, true, 'a'];